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
    amIRegistered: protectedProcedure
      .input(
        z.object({
          gameId: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        const user = ctx.session.user;
        return await ctx.gameService.getGameParticipant(
          input.gameId,
          user.userId,
        );
      }),
    loadGame: protectedProcedure
      .input(
        z.object({
          gameId: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        const user = ctx.session.user;
        const game = await ctx.gameService.getGame(input.gameId);
        const participant = await ctx.gameService.getGameParticipant(
          input.gameId,
          user.userId,
        );
        return {
          game,
          participant,
        };
      }),
    register: protectedProcedure
      .input(
        z.object({
          gameId: z.string(),
          username: z.string(),
          privacySigned: z.boolean(),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        return await ctx.gameService.registerUserToGame(input.gameId, {
          id: ctx.user.userId,
          privacySigned: input.privacySigned,
          username: input.username,
        });
      }),
    respondQuestion: protectedProcedure
      .input(
        z.object({
          gameId: z.string(),
          questionId: z.string(),
          selectedOption: z.string(),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        return await ctx.gameService.respondToQuestion(
          input.gameId,
          ctx.user.userId,
          input.questionId,
          input.selectedOption,
        );
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
    getGame: adminProcedure
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
    getRank: adminProcedure
      .input(
        z.object({
          gameId: z.string(),
          take: z.number(),
          skip: z.number(),
        }),
      )
      .query(async ({ ctx, input }) => {
        return ctx.gameService.getRank(input.gameId, input.skip, input.take);
      }),
  });
}
