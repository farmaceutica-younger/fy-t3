import { TRPCError } from "@trpc/server";
import { QuestionsSchema, type Questions } from "~/models/peapletrasure/schema";
import {
  QuizGame,
  parsePrismaGame,
  parsePrismaParticipant,
} from "~/models/peapletrasure/types";
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

  async registerUserToGame(
    gameId: string,
    user: { id: string; username: string; privacySigned: boolean },
  ) {
    if (!user.privacySigned) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "privacy is required",
      });
    }
    const game = await this.getGame(gameId);

    const userSigned = await this.prisma.quizGameParticipant.create({
      data: {
        gameId: game.id,
        userId: user.id,
        privacySigned: new Date(),
        username: user.username,
      },
    });

    return parsePrismaParticipant(userSigned);
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

  async getRank(gameId: string, skip: number, take: number) {
    const game = await this.getGame(gameId);
    const res = await this.prisma.quizGameParticipant.findMany({
      where: {
        gameId: game.id,
      },
      orderBy: [
        {
          points: "desc",
        },
        {
          lastResponse: "asc",
        },
      ],
      skip: skip,
      take: take,
    });
    return {
      game: parsePrismaGame(game),
      ranks: res.map(parsePrismaParticipant),
    };
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

  async getGameParticipant(gameId: string, userId: string) {
    const game = await this.getGame(gameId);
    const res = await this.prisma.quizGameParticipant.findUnique({
      where: {
        userId_gameId: {
          userId,
          gameId: game.id,
        },
      },
    });
    return res && parsePrismaParticipant(res);
  }

  async getGameParticipantOrThrow(gameId: string, userId: string) {
    const game = await this.getGame(gameId);
    const res = await this.prisma.quizGameParticipant.findUniqueOrThrow({
      where: {
        userId_gameId: {
          userId,
          gameId: game.id,
        },
      },
    });
    return parsePrismaParticipant(res);
  }

  async respondToQuestion(
    gameId: string,
    userId: string,
    questionId: string,
    selected: string,
  ) {
    const game = await this.getGame(gameId);
    const participant = await this.getGameParticipantOrThrow(gameId, userId);
    const question = game.questions[questionId];
    if (!question) {
      throw new Error("question not found");
    }

    const now = new Date();

    const responses = participant.responses;
    responses[questionId] = {
      selectedOption: selected,
      timestamp: now.toISOString(),
    };

    const points = Object.entries(responses)
      .map(([id, value]) => {
        const question = game.questions[id];
        const points =
          question?.correctOption === value.selectedOption ? 25 : 0;
        return points as number;
      })
      .reduce((acc, v) => acc + v, 0);

    const r = await this.prisma.quizGameParticipant.update({
      where: {
        userId_gameId: {
          gameId,
          userId,
        },
      },
      data: {
        points,
        responses,
        lastResponse: now,
      },
    });
    return parsePrismaParticipant(r);
  }
}
