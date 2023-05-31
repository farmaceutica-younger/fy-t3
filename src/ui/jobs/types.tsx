export interface SponsoredJob {
  title: string;
  shortDescription: string;
  companyName: string;
  companyWebsite: string;
  companyLogo: string;
  location: string;
  ral: string;
  remoteType: "remote" | "office" | "hybrid";
  longDescription: string;
  jobBenefit: string;
}

export type PrevieData = Pick<
  SponsoredJob,
  "title" | "shortDescription" | "location" | "ral" | "remoteType"
>;
