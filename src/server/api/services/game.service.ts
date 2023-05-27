import { QuizGame } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { parsePrismaGame } from "~/models/peapletrasure/types";
import Trpc from "~/pages/api/trpc/[trpc]";
import { FyPrismaClient } from "~/server/db";

export class GameService {
  constructor(private readonly prisma: FyPrismaClient) {}

  async getGame(id: string): Promise<QuizGame> {
    try {
      const res = await this.prisma.quizGame.findUniqueOrThrow({
        where: {
          id,
        },
      });
      return parsePrismaGame(res);
    } catch (e) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Game not found",
      });
    }
  }

  async isUserRegisted(gameId: string, userId: string) {
    const game = await this.getGame(gameId);
    const res = await this.prisma.quizGameParticipant.findUnique({
      where: {
        userId_gameId: {
          userId,
          gameId,
        },
      },
    });
    return !!res;
  }
}
