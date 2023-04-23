import { serialize } from "next-mdx-remote/serialize";
import { z } from "zod";
import { CreatePostSchema, PostFormSchema } from "~/forms/post/post-schema";
import { authordProcedure, createTRPCRouter } from "../trpc";

const p = authordProcedure;

export const authorRouter = createTRPCRouter({
  getUploadSignature: p.mutation(({ ctx }) => {
    return ctx.cloudinary.getUploadSignature("authos", ctx.authorId, "images");
  }),
  savePost: p
    .input(
      z.object({
        data: PostFormSchema,
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res = await ctx.blogs.updateBlogPost({
        postId: input.id,
        ...input.data,
      });
      return res.post;
    }),
  createPost: p.input(CreatePostSchema).mutation(async ({ input, ctx }) => {
    const res = await ctx.blogs.createBlogPost({
      authorId: ctx.authorId,
      title: input.title,
      body: "",
      description: input.description,
      featuredImage: "",
      tags: ["blog"],
    });
    return res.post;
  }),
  publishPost: p
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.blogs.publishBlogPost({
        postId: input.id,
      });
      return res.post;
    }),
  getPost: p
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { post } = await ctx.blogs.getBlogPost({
        postId: input.id,
      });
      return post;
    }),
  getAuthor: p.query(async ({ ctx }) => {
    const { author } = await ctx.blogs.getAuthor({
      authorId: ctx.authorId,
    });
    return author;
  }),
  getPosts: p
    .input(
      z.object({
        skip: z.number().int().default(0),
        take: z.number().int().default(20),
      })
    )
    .query(async ({ input, ctx }) => {
      const { posts, total } = await ctx.blogs.getBlogPosts({
        skip: input.skip,
        take: input.take,
        tags: [],
      });

      return { posts, total };
    }),
  mdSerialize: p
    .input(
      z.object({
        body: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const source = await serialize(input.body, {});
      return { source };
    }),
});
