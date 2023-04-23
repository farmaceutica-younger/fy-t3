import type { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "~/server/api/root";

export type ProfilePageData =
  inferRouterOutputs<AppRouter>["me"]["profilePageData"];

export type ProfilePageComponentProps = {
  data: ProfilePageData;
};
