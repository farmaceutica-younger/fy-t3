import { type QuizGame as PrismaQuizGame } from "@prisma/client";
import { QuestionsSchema, type Question, type Questions } from "./schema";

export type { Question };

export function parsePrismaGame(game: PrismaQuizGame): QuizGame {
  const q = QuestionsSchema.parse(game.questions);
  return {
    ...game,
    questions: q,
  };
}

export type QuizGame = Omit<PrismaQuizGame, "questions"> & {
  questions: Questions;
};
