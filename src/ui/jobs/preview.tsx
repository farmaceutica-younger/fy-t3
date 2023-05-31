import Link from "next/link";
import { SponsoredJobPreviewFragment } from "src/generated/graphql";
import { type SponsoredJob } from "./types";

export const SponsoredJobPreview = (props: SponsoredJobPreviewFragment) => {
  return (
    <div className="bg-gray-50 p-2">
      <div className="card mx-2 my-2 sm:mx-auto sm:max-w-xl">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="max-h-10 max-w-md"
                src={props.companyLogo}
                alt={props.companyName}
              />
            </div>
          </div>

          <h3 className="card-title text-2xl">{props.title}</h3>
          <div className="mt-1 space-y-0 italic">
            <p className="font-semibold">{props.companyName}</p>
            <p>📍 {props.location}</p>
            {props.ralRange && <p>💰 {props.ralRange}</p>}
            <RemoteTypeInfo remoteType={props.remoteType} />{" "}
          </div>
          <p className="mt-2">{props.description}</p>
          <div />
          <div className="card-actions flex justify-end">
            <Link
              href={`/jobs/info/${props.id}`}
              className="btn-outline btn btn-primary btn-sm"
            >
              Info ℹ️
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export function RemoteTypeInfo({
  remoteType,
}: {
  remoteType: Pick<SponsoredJob, "remoteType">["remoteType"] | string;
}) {
  if (remoteType === "hybrid") {
    return <p> 🏠 + 🚋 Lavoro ibrido</p>;
  }
  if (remoteType === "office") {
    return <p>🚋 Lavoro in Sede </p>;
  }
  if (remoteType === "remote") {
    return <p>🏠 Lavoro in Remoto</p>;
  }
  return null;
}
