import { JSONContent } from "@tiptap/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { GetAllPostsPathsDocument } from "src/generated/graphql";
import { renderHTML } from "~/editor/render";
import { prisma } from "~/server/db";
import { gqlCli } from "~/server/gql";
import { GmpCta } from "~/ui/cta/gmp";
import { Footer } from "~/ui/footer";
import { Header } from "~/ui/header";
import { PostPage } from "~/ui/post";
import { SEO } from "~/ui/seo";
import { readTime } from "~/utils/read-time";

export default function TestPage({
  html,
  author,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.featuredImage!}
        author={author.name}
        date={frontmatter.publishedTime}
        type="article"
      />
      <Header />
      <PostPage frontmatter={frontmatter} author={author} html={html} />
      <div className="bg-pink-50 pt-6">
        <GmpCta />
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const data = await gqlCli
    .query(GetAllPostsPathsDocument, {
      skip: 0,
      take: 30000,
    })
    .toPromise();
  const posts = data?.data?.getBlogPosts.edges;
  if (!posts) {
    throw new Error("cannot get posts");
  }

  const paths = posts.map((post) => {
    return {
      params: {
        path: post.post.path.split("/").filter((p) => !!p),
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ path: string[] }>) {
  const path = "/" + params!.path.join("/") + "/";

  let { body, author, ...post } = await prisma.blogPost.findUniqueOrThrow({
    where: {
      path,
      published: true,
      publishedTime: {
        lte: new Date(),
      },
    },
    select: {
      id: true,
      path: true,
      title: true,
      description: true,
      featuredImage: true,
      publishedTime: true,
      showFeaturedImage: true,
      body: true,
      tags: true,
      author: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  const html = renderHTML(body as unknown as JSONContent);

  return {
    props: {
      frontmatter: {
        ...post,
        publishedTime: post.publishedTime || new Date(),
        readTime: readTime(html),
      },
      html,
      author,
    },
    revalidate: 10 * 60,
  };
}
