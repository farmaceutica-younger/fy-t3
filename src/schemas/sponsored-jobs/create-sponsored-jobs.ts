import { z } from "zod";

export const CreateSponsoreJobSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(255),
  companyName: z.string().min(1).max(255),
});
