import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(255),
});

export const PostFormSchema = z.object({
  ...CreatePostSchema.shape,
  body: z.object({
    type: z.literal("doc"),
    content: z.array(z.any()),
  }),
  featuredImage: z.string(),
  showFeaturedImage: z.boolean(),
  tags: z.string().array(),
});
