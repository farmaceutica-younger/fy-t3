import { z } from "zod";

export const QuestionSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  correctOption: z.string(),
});

export type Question = z.infer<typeof QuestionSchema>;

export const QuestionsSchema = z.record(z.string(), QuestionSchema);

export type Questions = z.infer<typeof QuestionsSchema>;
