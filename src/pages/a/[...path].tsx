import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { gqlCli } from "~/server/gql";
import {
  GetAllPostsPathsDocument,
  GetPostByPathDocument,
} from "src/generated/graphql";
import { GmpCta } from "~/ui/cta/gmp";
import { Footer } from "~/ui/footer";
import { Header } from "~/ui/header";
import { PostPage } from "~/ui/post";
import { SEO } from "~/ui/seo";

export default function TestPage({
  source,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!source || !frontmatter) {
    return (
      <>
        <p>NOT FOUND</p>
      </>
    );
  }

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.featuredImage!}
        author={frontmatter.author.name}
        date={frontmatter.publishedTime}
        type="article"
      />
      <Header />
      {source && (
        <PostPage
          frontmatter={frontmatter}
          source={source}
          author={frontmatter.author}
        />
      )}
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

  const data = await gqlCli.query(GetPostByPathDocument, { path }).toPromise();
  const post = data.data?.getBlogPost;
  if (!post) {
    throw new Error("cannot get post");
  }

  const { body, ...frontmatter } = post;

  let mdxSource: MDXRemoteSerializeResult<Record<string, unknown>> | undefined;
  try {
    mdxSource = await serialize(body, {
      mdxOptions: {
        rehypePlugins: [],
      },
    });
  } catch {}

  return {
    props: {
      source: mdxSource,
      frontmatter: {
        ...frontmatter,
        publishedTime: new Date(frontmatter.publishedTime),
      },
    },
    revalidate: 10 * 60,
  };
}
