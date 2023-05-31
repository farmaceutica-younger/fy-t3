import {
  type QuizGame as PrismaQuizGame,
  type QuizGameParticipant as PrismaQuizGameParticipant,
} from "@prisma/client";
import {
  QuestionsSchema,
  type Question,
  type QuestionResponse,
  QuestionResponsesSchema,
} from "./schema";

export type { Question, QuestionResponse };

export function parsePrismaGame(game: PrismaQuizGame) {
  const q = QuestionsSchema.parse(game.questions);
  return {
    ...game,
    questions: q,
  };
}

export function parsePrismaParticipant(participant: PrismaQuizGameParticipant) {
  return {
    ...participant,
    responses: QuestionResponsesSchema.parse(participant.responses),
  };
}

export type QuizGame = ReturnType<typeof parsePrismaGame>;
export type QuizGameParticipant = ReturnType<typeof parsePrismaParticipant>;
