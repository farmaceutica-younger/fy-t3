import { TRPCError } from "@trpc/server";
import cuid from "cuid";
import { z } from "zod";
import { CreatePostSchema, PostFormSchema } from "~/forms/post/post-schema";
import { computePostPath } from "~/utils/slug";
import { authordProcedure, createTRPCRouter } from "../trpc";

const p = authordProcedure;

export const authorRouter = createTRPCRouter({
  getUploadSignature: p.mutation(({ ctx }) => {
    return ctx.cloudinary.getUploadSignature("authors", ctx.authorId, "images");
  }),
  savePost: p
    .input(
      z.object({
        data: PostFormSchema,
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const res = await ctx.prisma.blogPost.update({
        where: {
          id: input.id,
          authorId: ctx.authorId,
        },
        data: {
          title: input.data.title,
          body: input.data.body,
          description: input.data.description,
          featuredImage: input.data.featuredImage,
          showFeaturedImage: input.data.showFeaturedImage,
          tags: input.data.tags,
        },
      });
      return res;
    }),
  createPost: p.input(CreatePostSchema).mutation(async ({ input, ctx }) => {
    const res = await ctx.prisma.blogPost.create({
      data: {
        authorId: ctx.authorId,
        title: input.title,
        body: "",
        description: input.description,
        featuredImage: "",
        tags: ["blog"],
        path: "unpublished_" + cuid(),
      },
    });
    return res;
  }),
  publishPost: p
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.blogPost.findUnique({
        where: {
          id: input.id,
          authorId: ctx.authorId,
          published: false,
        },
      });
      if (!post || !post.publishedTime) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Post not found" });
      }
      const path = computePostPath(post.title, post.publishedTime);
      const res = await ctx.prisma.blogPost.update({
        where: {
          id: input.id,
        },
        data: {
          published: true,
          path: path,
        },
      });
      return res;
    }),
  getPost: p
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const post = await ctx.prisma.blogPost.findUnique({
        where: {
          id: input.id,
          authorId: ctx.authorId,
        },
        include: {
          author: true,
        },
      });
      return post;
    }),
  getPosts: p
    .input(
      z.object({
        skip: z.number().int().default(0),
        take: z.number().int().default(20),
      }),
    )
    .query(async ({ input, ctx }) => {
      const posts = await ctx.prisma.blogPost.findMany({
        where: {
          authorId: ctx.authorId,
        },
        orderBy: {
          publishedTime: "desc",
        },
        include: {
          author: true,
        },
        skip: input.skip,
        take: input.take,
      });
      const total = await ctx.prisma.blogPost.count({
        where: {
          authorId: ctx.authorId,
        },
      });

      return { posts, total };
    }),
});
