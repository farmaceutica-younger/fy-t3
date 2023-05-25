"use client";
import { useState } from "react";
import { reactApi } from "~/utils/api";
import { SponsoredJobsList } from "./jobs-list";
import { DashboardContainer } from "~/ui/dashboard-container";
import { useCreateSponsoredJob } from "./create-dialog";

const AdminJobsPage = () => {
  const createSponsoredJob = useCreateSponsoredJob();
  const [options, setOptions] = useState({ skip: 0, take: 20 });

  const { data } = reactApi.sponsoredJobs.listSposnoredJobs.useQuery(options);

  if (!data) {
    return <p>loading...</p>;
  }
  const { jobs } = data;

  return (
    <DashboardContainer>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Sponsored Jobs</h2>
        <button className="btn-primary btn-sm btn" onClick={createSponsoredJob}>
          Crea Nuovo
        </button>
      </div>
      <SponsoredJobsList jobs={jobs} />
    </DashboardContainer>
  );
};

export default AdminJobsPage;
