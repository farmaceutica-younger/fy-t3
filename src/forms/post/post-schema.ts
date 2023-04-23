import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(255),
});

export const PostFormSchema = z.object({
  ...CreatePostSchema.shape,
  body: z.string(),
  featuredImage: z.string(),
  publishedTime: z.date(),
  showFeaturedImage: z.boolean(),
  tags: z.string().array(),
});
