import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import { resizeCloudinaryImage } from "../cloudinary-image";
import { RemoteTypeInfo } from "./preview";

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
const components: any = {
  img: ({ alt, src }: { alt: string; src: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={resizeCloudinaryImage(src, 300)} className="m-auto" />
  ),
};

export const SponsoredPostPage = ({ job, source }: SponsoredPostPageProps) => {
  return (
    <>
      <main className="wrapper bg-white py-10">
        <div className="prose-md prose m-auto mt-6 px-2 prose-p:leading-snug prose-ul:leading-snug md:px-0">
          <h1 className="m-auto font-bold">{job.title}</h1>

          <div className="mt-10">
            <Link href={job.companyWebsite} target="_blank" rel="external">
              <>
                <span className="sr-only">{job.companyName}</span>
                <img
                  width={400}
                  src={resizeCloudinaryImage(job.companyLogo, 1200)}
                  alt={job.companyName}
                />
              </>
            </Link>
          </div>

          <div className="not-prose m-auto flex flex-col">
            <p>📍 {job.location}</p>
            {job.ralRange && (
              <>
                <p>💰 {job.ralRange}</p>
              </>
            )}
            <RemoteTypeInfo remoteType={job.remoteType} />{" "}
          </div>
          <p>{job.description}</p>
          <div className="my-5 text-center">
            <Link
              href={job.applicationLink}
              className="btn btn-primary"
              target={"_blank"}
              rel="external"
            >
              Apply now 🚀
            </Link>
          </div>
          <MDXRemote {...source} components={components} />
        </div>
        <div className="mt-5 text-center">
          <Link
            href={job.applicationLink}
            className="btn btn-primary"
            target={"_blank"}
            rel="external"
          >
            Apply now 🚀
          </Link>
        </div>
      </main>
    </>
  );
};

interface SponsoredPostPageProps {
  job: {
    title: string;
    description: string;
    companyName: string;
    companyWebsite: string;
    companyLogo: string;
    location: string;
    ralRange: string;
    applicationLink: string;
    remoteType: "remote" | "office" | "hybrid" | string;
  };
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}
