import Link from "next/link";
import { CloudinaryImage } from "~/ui/cloudinary-image";
import { type SponsoredJob } from "@prisma/client";

interface SponsoredJobsListProps {
  jobs: SponsoredJob[];
}

export const SponsoredJobsList = ({ jobs }: SponsoredJobsListProps) => {
  return (
    <>
      <ul className="space-y-4">
        {jobs.map((sp) => (
          <SponsoredJobView key={sp.id} job={sp} />
        ))}
      </ul>
    </>
  );
};

function SponsoredJobView({ job }: { job: SponsoredJob }): JSX.Element {
  return (
    <li className="mt-4 rounded-md bg-slate-200 shadow-md">
      <Link
        href={`/dashboard/author/${job.id}/edit`}
        className="flex cursor-pointer gap-2 align-middle hover:ring-2"
      >
        <CloudinaryImage
          className="w-32 flex-shrink-0 object-contain"
          src={job.companyLogo}
          alt={job.companyName}
        />
        <div>
          <div className="my-2">
            <PostStatus job={job} />
          </div>
          <h4 className="text-sm text-stone-800">{job.title}</h4>
          <p className="text-sm text-stone-600"> {job.description}</p>
        </div>
      </Link>
    </li>
  );
}

const PostStatus = ({ job }: { job: SponsoredJob }) => {
  if (!job.public) {
    return (
      <button className="cursor-pointer rounded-full bg-blue-600 px-2 py-1 text-xs text-blue-200 hover:bg-blue-800">
        Pubblica
      </button>
    );
  }

  return (
    <div className="mb-2">
      <span className="rounded-full bg-green-200 px-2 py-1 text-xs text-green-600 ring-1 ring-green-600">
        pubblicato
      </span>
    </div>
  );
};
