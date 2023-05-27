import { TRPCError } from "@trpc/server";
import { QuestionsSchema, type Questions } from "~/models/peapletrasure/schema";
import { QuizGame, parsePrismaGame } from "~/models/peapletrasure/types";
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
        cause: (e as Error).message,
      });
    }
  }

  async setGameQuestions(gameId: string, questions: Questions) {
    return await this.prisma.quizGame.update({
      data: {
        questions: QuestionsSchema.parse(questions),
      },
      where: {
        id: gameId,
      },
    });
  }

  async createGame(name: string, description: string): Promise<QuizGame> {
    try {
      const res = await this.prisma.quizGame.create({
        data: {
          name,
          description,
        },
      });
      return parsePrismaGame(res);
    } catch (e) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "unkwon error",
        cause: (e as Error).message,
      });
    }
  }

  async deleteGame(gameId: string): Promise<QuizGame> {
    try {
      const res = await this.prisma.quizGame.delete({
        where: {
          id: gameId,
        },
      });
      return parsePrismaGame(res);
    } catch (e) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "unkwon error",
        cause: (e as Error).message,
      });
    }
  }

  async listGames(skip: number, take: number): Promise<QuizGame[]> {
    try {
      const res = await this.prisma.quizGame.findMany({
        skip,
        take,
      });
      return res.map(parsePrismaGame);
    } catch (e) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "unkwon error",
        cause: (e as Error).message,
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
