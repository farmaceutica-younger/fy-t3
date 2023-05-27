import { z } from "zod";
import { adminProcedure, createTRPCRouter, protectedProcedure } from "../trpc";
import { QuestionsSchema } from "~/models/peapletrasure/schema";

export const gameRouters = createTRPCRouter({
  member: createMemberRouter(),
  admin: createAdminRouter(),
});

function createMemberRouter() {
  return createTRPCRouter({
    getGame: protectedProcedure
      .input(
        z.object({
          gameId: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        return await ctx.gameService.getGame(input.gameId);
      }),
    isUserRegisted: protectedProcedure
      .input(
        z.object({
          gameId: z.string(),
          userId: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        return await ctx.gameService.isUserRegisted(input.gameId, input.userId);
      }),
  });
}

function createAdminRouter() {
  return createTRPCRouter({
    createGame: adminProcedure
      .input(
        z.object({
          name: z.string(),
          description: z.string(),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        return await ctx.gameService.createGame(input.name, input.description);
      }),

    deleteGame: adminProcedure
      .input(
        z.object({
          gameId: z.string(),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        return ctx.gameService.deleteGame(input.gameId);
      }),
    getGame: protectedProcedure
      .input(
        z.object({
          gameId: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        return await ctx.gameService.getGame(input.gameId);
      }),
    setGameQuestions: adminProcedure
      .input(
        z.object({
          gameId: z.string(),
          questions: QuestionsSchema,
        }),
      )
      .mutation(async ({ ctx, input }) => {
        return await ctx.gameService.setGameQuestions(
          input.gameId,
          input.questions,
        );
      }),
    listGames: adminProcedure
      .input(
        z.object({
          skip: z.number(),
          take: z.number(),
        }),
      )
      .query(async ({ ctx, input }) => {
        return await ctx.gameService.listGames(input.skip, input.take);
      }),
  });
}
