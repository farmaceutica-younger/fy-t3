import { z } from "zod";

export const QuestionSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  correctOption: z.string(),
  personName: z.string(),
  personLinkedin: z.string().optional(),
});

export type Question = z.infer<typeof QuestionSchema>;

export const QuestionsSchema = z.record(z.string(), QuestionSchema);

export type Questions = z.infer<typeof QuestionsSchema>;

export const QuestionResponseSchema = z.object({
  selectedOption: z.string(),
  timestamp: z.string().datetime(),
});

export const QuestionResponsesSchema = z.record(
  z.string(),
  QuestionResponseSchema,
);
export type QuestionResponse = z.infer<typeof QuestionResponseSchema>;

export type QuestionResponses = z.infer<typeof QuestionResponsesSchema>;
