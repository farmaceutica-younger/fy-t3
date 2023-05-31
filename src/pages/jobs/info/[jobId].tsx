import { GetStaticPropsContext } from "next";
import { serialize } from "next-mdx-remote/serialize";
import {
  GetALlSponsoredJobIdsDocument,
  GetSponsoredJobDocument,
  GetSponsoredJobQuery,
} from "src/generated/graphql";
import { gqlCli } from "~/server/gql";
import { Footer } from "~/ui/footer";
import { Header } from "~/ui/header";
import { SponsoredPostPage } from "~/ui/jobs/page";
import { SEO } from "~/ui/seo";

const JobPage = ({
  job,
  mdxSource,
  image,
}: Awaited<ReturnType<typeof getJobProps>>["props"]) => {
  if (!job) {
    return null;
  }
  return (
    <>
      <SEO
        title={`${job.title} | ${job.companyName}`}
        description={job.description}
        author={job.companyName}
        image={image}
      />
      <Header />
      <SponsoredPostPage job={job} source={mdxSource} />
      <Footer />
    </>
  );
};

export default JobPage;

export async function getStaticProps(
  ctx: GetStaticPropsContext<{ jobId: string }>,
) {
  const jobId = ctx.params?.jobId as string;

  const res = await gqlCli
    .query(GetSponsoredJobDocument, {
      id: jobId,
    })
    .toPromise();

  const job = res.data?.getSponsoredJob;
  if (!job) {
    return {
      notFound: true,
    };
  }

  return await getJobProps(job);
}

async function getJobProps(job: GetSponsoredJobQuery["getSponsoredJob"]) {
  // rome-ignore lint/style/noNonNullAssertion: <explanation>
  const { body, ...frontmatter } = job!;
  const image = getJobImage(job);

  const source = await serialize(body);

  return {
    props: {
      job: frontmatter,
      mdxSource: source,
      image,
    },
  };
}

export async function getStaticPaths() {
  const data = await gqlCli
    .query(GetALlSponsoredJobIdsDocument, {
      skip: 0,
      take: 0,
    })
    .toPromise();
  const posts = data?.data?.getSponsoredJobs.edges;
  if (!posts) {
    throw new Error("cannot get posts");
  }

  const paths = posts.map((e) => {
    return {
      params: {
        jobId: e.job.id,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

function getJobImage(
  job: GetSponsoredJobQuery["getSponsoredJob"],
  transparent = false,
) {
  // rome-ignore lint/style/noNonNullAssertion: <explanation>
  const j = job!;
  const query = {
    title: j.title,
    ral: j.ralRange,
    company: j.companyName,
    location: j.location,
    type: getRemoteTypeString(j.remoteType),
    transparent: transparent ? "true" : "",
  };
  const url = new URL("https://tickets.dev.ludusrusso.space/job");
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.append(key, value);
  }
  return url.href;
}

function getRemoteTypeString(type: "hybrid" | "remote" | "office" | string) {
  if (type === "hybrid") {
    return "Lavoro ibrido";
  }
  if (type === "office") {
    return "Lavoro in Sede;";
  }
  if (type === "remote") {
    return "Lavoro in Remoto";
  }
  return "";
}
