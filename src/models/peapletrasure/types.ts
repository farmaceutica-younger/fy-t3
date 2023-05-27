import { type QuizGame as PrismaQuizGame } from "@prisma/client";
import { QuestionSchema, type Question } from "./schema";

export type { Question };

export function parsePrismaGame(game: PrismaQuizGame): QuizGame {
  return {
    ...game,
    questions: QuestionSchema.array().parse(game.questions),
  };
}

export type QuizGame = PrismaQuizGame & {
  questions: Question[];
};
