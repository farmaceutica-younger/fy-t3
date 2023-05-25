import { z } from "zod";
import { adminProcedure, createTRPCRouter } from "../trpc";

export const sponsoredJobsRouter = createTRPCRouter({
  listSposnoredJobs: adminProcedure
    .input(
      z.object({
        skip: z.number().int(),
        take: z.number().int(),
      })
    )
    .query(async ({ ctx, input }) => {
      const jobs = await ctx.prisma.sponsoredJob.findMany({
        skip: input.skip,
        take: input.take,
        orderBy: {
          createdAt: "desc",
        },
      });
      const total = await ctx.prisma.sponsoredJob.count();
      return { jobs, total };
    }),
  getSponsoredJob: adminProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const job = await ctx.prisma.sponsoredJob.findUnique({
        where: {
          id: input.id,
        },
      });
      return job;
    }),
});
