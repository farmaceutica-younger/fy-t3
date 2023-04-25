import { AssociationQuestionairre } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import {
  buildAssociationQuestionairreSchema,
  QuestionairreSchema,
  QuestionsSchema,
} from "~/components/questionairre/schema";
import { getUrl } from "~/utils/url";
import { z } from "zod";
import {
  adminProcedure,
  Context,
  createTRPCRouter,
  protectedProcedure,
} from "../trpc";

const adminAssociationRouter = createTRPCRouter({
  getMembers: adminProcedure
    .input(
      z.object({
        skip: z.number().int().default(0),
        take: z.number().int().default(100),
      })
    )
    .query(async ({ ctx, input }) => {
      const res = await ctx.prisma.associationMembership.findMany({
        skip: input.skip,
        take: input.take,
        include: {
          user: true,
          profile: true,
        },
      });
      return res;
    }),
  getMembersWithPayments: adminProcedure
    .input(
      z.object({
        skip: z.number().int().default(0),
        take: z.number().int().default(100),
      })
    )
    .query(async ({ ctx, input }) => {
      const res = await ctx.prisma.associationMembership.findMany({
        skip: input.skip,
        take: input.take,
        orderBy: {
          memberSince: "asc",
        },
        include: {
          user: true,
          profile: true,
          payments: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });
      return res;
    }),
  getMember: adminProcedure
    .input(
      z.object({
        memberId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const res = await ctx.prisma.associationMembership.findUnique({
        where: {
          id: input.memberId,
        },
        include: {
          user: true,
          profile: true,
        },
      });
      return res;
    }),
  approveMember: adminProcedure
    .input(z.object({ memberId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.prisma.associationMembership.update({
        data: {
          status: "APPROVED",
        },
        where: {
          id: input.memberId,
          status: "PENDING",
        },
        include: {
          user: true,
          profile: true,
        },
      });

      if (!res) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      await ctx.kannon.sendMembershipApproved(
        res.user.email,
        res.profile.firstName,
        getUrl("/dashboard/association/register")
      );
    }),
  registerMemberPayment: adminProcedure
    .input(
      z.object({
        memberId: z.string(),
        amount: z.number(),
        method: z.string(),
        note: z.string(),
        date: z.date().default(new Date()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.associationMembershipPayment.create({
        data: {
          membershipId: input.memberId,
          amount: input.amount,
          method: input.method,
          note: input.note,
          createdAt: input.date,
          data: {},
        },
      });
    }),
  setStatusAsMember: adminProcedure
    .input(z.object({ memberId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const member = await ctx.prisma.associationMembership.setPayment(
        input.memberId,
        {
          amount: 0,
          data: {},
          method: "FREE",
          note: "Free membership",
        }
      );

      if (!member) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      return member;
    }),
  getMemberWithQuestionairre: adminProcedure
    .input(
      z.object({
        memberId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const member = await ctx.prisma.associationMembership.findUnique({
        where: {
          id: input.memberId,
        },
        include: {
          user: true,
          profile: true,
          answers: {
            take: 1,
            orderBy: { timestmap: "desc" },
          },
        },
      });

      if (!member) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const answer = member.answers[0];
      if (!answer) {
        return { member };
      }
      const questionairre = await getQuestionairre(ctx, answer.questionairreId);

      return { member, questionairre, answer };
    }),
  getMemberPayments: adminProcedure
    .input(
      z.object({
        memberId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const member = await ctx.prisma.associationMembership.findUnique({
        where: {
          id: input.memberId,
        },
        include: {
          payments: true,
        },
      });

      if (!member) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      return { payments: member.payments };
    }),
  updateQuestionairre: adminProcedure
    .input(z.object({ questionairre: QuestionairreSchema }))
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.prisma.associationQuestionairre.create({
        data: {
          questions: input.questionairre.questions,
        },
      });
      return parseQuestionairre(res);
    }),
  sendEmail: adminProcedure
    .input(
      z.object({
        subject: z.string(),
        content: z.string(),
        preview: z.string(),
        isTest: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const testEmails = [
        "ludovico@farmaceuticayounger.science",
        "silvia@farmaceuticayounger.science",
      ];

      const users = await ctx.prisma.associationMembership.findMany({
        where: {
          status: "COMPLETED",
          user: input.isTest
            ? {
                email: {
                  in: testEmails,
                },
              }
            : undefined,
        },
        select: {
          user: {
            select: {
              email: true,
            },
          },
          profile: true,
        },
      });

      const fields = buildEmailFields(users, input.preview);

      const res = await ctx.kannon.sendMail(
        fields,
        `${input.isTest ? "[TEST] " : ""}${input.subject}`,
        input.content
      );
      return {};
    }),
});

const loggedRouter = createTRPCRouter({
  answerQuestionairre: protectedProcedure
    .input(
      z.object({
        form: z.any(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const quest = await getCurrentQuestionairre(ctx);
      const schema = buildAssociationQuestionairreSchema(quest.questions);
      const { privacy, ...form } = schema.parse(input.form);

      const member = await ctx.prisma.associationMembership.create({
        data: {
          id: ctx.user.userId,
          privacySigned: !!privacy ? new Date() : undefined,
          answers: {
            create: {
              answers: form,
              questionairre: {
                connect: {
                  id: quest.id,
                },
              },
            },
          },
        },
        include: {
          profile: true,
          user: true,
        },
      });
      await Promise.all([
        ctx.bot.notifyMembershipRequest(member.profile),
        ctx.kannon.sendMembershipRequest(
          member.user.email,
          member.profile.firstName
        ),
      ]);
      return {};
    }),
});

export const associationRouter = createTRPCRouter({
  getQuestionairre: protectedProcedure.query(async ({ ctx }) => {
    return getCurrentQuestionairre(ctx);
  }),
  admin: adminAssociationRouter,
  me: loggedRouter,
});

const DefaultQuestionairre = {
  questions: [],
  version: 0,
  createdAt: new Date(),
  id: "",
};

const parseQuestionairre = (
  q: AssociationQuestionairre | null = DefaultQuestionairre
) => {
  if (!q) {
    q = DefaultQuestionairre;
  }
  const questions = QuestionsSchema.parse(q.questions);
  return {
    ...q,
    questions: questions,
  };
};

async function getCurrentQuestionairre(ctx: Context) {
  const res = await ctx.prisma.associationQuestionairre.findFirst({
    orderBy: {
      version: "desc",
    },
  });
  return parseQuestionairre(res);
}

async function getQuestionairre(ctx: Context, id: string) {
  const res = await ctx.prisma.associationQuestionairre.findUnique({
    where: {
      id,
    },
  });
  return parseQuestionairre(res);
}

interface EmailUser {
  user: {
    email: string;
  };
  profile: {
    id: string;
    firstName: string;
    lastName: string;
    telegramUsername: string | null;
    linkedinUrl: string | null;
  };
}

function buildEmailFields(users: EmailUser[], preview: string) {
  const fields = users.map((u) => ({
    email: u.user.email,
    fields: {
      name: u.profile.firstName,
      preview: preview,
    },
  }));
  return fields;
}
