import { PrismaClient } from "@prisma/client";
import { renderHTML } from "~/editor/render";
import { env } from "~/env.mjs";
import { readTime } from "~/utils/read-time";

const extendPrisma = (p: PrismaClient) => {
  return p;
};

type ClientType = ReturnType<typeof extendPrisma>;

const globalForPrisma = globalThis as unknown as { prisma: ClientType };

export const prisma =
  globalForPrisma.prisma ||
  extendPrisma(
    new PrismaClient({
      log:
        env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    })
  );

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function getPublishedPostsPreview(
  skip: number,
  take: number,
  filterTags: string[] | undefined
) {
  const posts = await prisma.blogPost.findMany({
    where: {
      published: true,
      publishedTime: {
        lte: new Date(),
      },
      tags: filterTags && {
        hasSome: filterTags,
      },
    },
    orderBy: {
      publishedTime: "desc",
    },
    select: {
      author: true,
      description: true,
      id: true,
      path: true,
      featuredImage: true,
      tags: true,
      publishedTime: true,
      body: true,
      title: true,
    },
    take,
    skip,
  });

  return posts.map(({ body, ...post }) => {
    const html = renderHTML(body);
    return {
      ...post,
      readTime: readTime(html),
      publishedTime: post.publishedTime || new Date(),
    };
  });
}

export async function getPublishedPostsCount(filterTags: string[] | undefined) {
  const count = await prisma.blogPost.count({
    where: {
      published: true,
      publishedTime: {
        lte: new Date(),
      },
      tags: filterTags && {
        hasSome: filterTags,
      },
    },
  });

  return count;
}
