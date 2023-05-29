import { PrismaClient } from "@prisma/client";
import { renderHTML } from "~/editor/render";
import { env } from "~/env.mjs";
import { QuestionsSchema } from "~/models/peapletrasure/schema";
import { readTime } from "~/utils/read-time";

const extendPrisma = (p: PrismaClient) => {
  return p.$extends({
    model: {
      associationMembership: {
        setPayment: (
          id: string,
          paymentData: {
            amount: number;
            method: string;
            note: string;
            data: any;
          },
        ) => {
          return prisma.associationMembership.update({
            data: {
              status: "COMPLETED",
              memberUntil: endOfSubscription(),
              toRenew: false,
              payments: {
                create: {
                  ...paymentData,
                },
              },
            },
            where: {
              id: id,
            },
            include: {
              user: true,
              profile: true,
            },
          });
        },
      },
    },
  });
};

export type FyPrismaClient = ReturnType<typeof extendPrisma>;

const globalForPrisma = globalThis as unknown as { prisma: FyPrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  extendPrisma(
    new PrismaClient({
      log:
        env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    }),
  );

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function getPublishedPostsPreview(
  skip: number,
  take: number,
  filterTags: string[] | undefined,
) {
  const posts = await prisma.blogPost.findMany({
    where: {
      published: true,
      publishedTime: {
        lte: new Date(),
      },
      tags: filterTags && {
        hasSome: filterTags,
      },
    },
    orderBy: {
      publishedTime: "desc",
    },
    select: {
      author: true,
      description: true,
      id: true,
      path: true,
      featuredImage: true,
      tags: true,
      publishedTime: true,
      body: true,
      title: true,
    },
    take,
    skip,
  });

  return posts.map(({ body, ...post }) => {
    const html = renderHTML(body);
    return {
      ...post,
      readTime: readTime(html),
      publishedTime: post.publishedTime || new Date(),
    };
  });
}

export async function getPublishedPostsCount(filterTags: string[] | undefined) {
  const count = await prisma.blogPost.count({
    where: {
      published: true,
      publishedTime: {
        lte: new Date(),
      },
      tags: filterTags && {
        hasSome: filterTags,
      },
    },
  });

  return count;
}

function endOfSubscription() {
  const date = new Date();

  if (date.getMonth() > 8) {
    return new Date(date.getFullYear() + 1, 11, 31);
  }

  return new Date(date.getFullYear(), 11, 31);
}
