import path from "path";
import { env } from "~/env.mjs";

export const getUrl = (...p: string[]) => {
  const url = new URL(path.join(...p), env.BASE_URL);
  return url.href;
};
