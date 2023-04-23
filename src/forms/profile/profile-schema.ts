import { z } from "zod";

export const ProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  linkedinUrl: z.union([z.string().url(), z.null()]).optional(),
  telegramUsername: z.union([z.string(), z.null()]).optional(),
});

export type ProfileType = z.TypeOf<typeof ProfileSchema>;
