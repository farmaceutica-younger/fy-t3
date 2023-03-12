import { EventPage } from "~/ui/event";
import { Footer } from "~/ui/footer";
import { GmpCta } from "~/ui/cta/gmp";
import { Header } from "~/ui/header";
import { SEO } from "~/ui/seo";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { gqlCli } from "~/server/gql";
import {
  GetAllEventSlugsDocument,
  GetEventDocument,
} from "src/generated/graphql";
import { readTime } from "~/utils/read-time";

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
        date={new Date(frontmatter.startDate)}
        type="article"
      />
      <Header />
      {source && (
        <EventPage
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
  const res = await gqlCli.query(GetAllEventSlugsDocument, {}).toPromise();
  const events = res.data?.getEvents.edges || [];
  const paths = events.map((e) => `/events/${e.event.slug}`);
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug!;
  const res = await gqlCli.query(GetEventDocument, { slug }).toPromise();
  const event = res.data?.getEvent;
  if (!event) {
    return {
      props: {},
    };
  }

  const { body, ...frontmatter } = event;

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
        readTime: readTime(body),
      },
    },
    revalidate: 10 * 60,
  };
}
