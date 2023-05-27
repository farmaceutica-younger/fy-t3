import { z } from "zod";

export const QuestionSchema = z.object({
  question: z.string(),
  answers: z.array(z.string()),
  correctAnswer: z.string(),
});

export type Question = z.infer<typeof QuestionSchema>;
