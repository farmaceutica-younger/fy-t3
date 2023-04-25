import { PrismaClient } from "@prisma/client";
import { posts } from "./posts";
import { authors } from "./authors";
import MarkdownIT from "markdown-it";

import { generateJSON } from "@tiptap/html";
import { extensions } from "../src/editor/extensions";

const md = new MarkdownIT({ html: true, linkify: true });

const prisma = new PrismaClient();

async function main() {
  await prisma.blogPost.deleteMany({});
  await prisma.author.deleteMany({});
  for (const author of authors) {
    console.log("author", author.id);
    await prisma.author.create({
      data: {
        id: author.id,
        name: author.name,
        bio: author.bio,
        image: author.profile_image,
        createdAt: new Date(author.created_at),
        updatedAt: new Date(author.updated_at),
      },
    });
  }

  for (const post of posts) {
    const html = md.render(post.body);
    const jsonBody = generateJSON(html, extensions);
    await prisma.blogPost.create({
      data: {
        id: post.id,
        title: post.title,
        body: jsonBody,
        description: post.description,
        featuredImage: post.featured_image,
        path: post.path,
        createdAt: new Date(post.created_at),
        updatedAt: new Date(post.updated_at),
        published: post.published,
        publishedTime: new Date(post.published_time),
        showFeaturedImage: post.show_featured_image,
        authorId: post.author_id,
        tags: post.tags,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
