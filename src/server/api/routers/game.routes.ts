import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const gameRouters = createTRPCRouter({
  member: createMemberRouter(),
});

function createMemberRouter() {
  return createTRPCRouter({
    getGame: protectedProcedure
      .input(
        z.object({
          gameId: z.string(),
        })
      )
      .query(async ({ ctx, input }) => {
        return await ctx.gameService.getGame(input.gameId);
      }),
    isUserRegisted: protectedProcedure
      .input(
        z.object({
          gameId: z.string(),
          userId: z.string(),
        })
      )
      .query(async ({ ctx, input }) => {
        return await ctx.gameService.isUserRegisted(input.gameId, input.userId);
      }),
  });
}
