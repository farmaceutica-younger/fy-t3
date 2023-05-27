import { initUrqlClient } from "next-urql";
import { fetchExchange } from "urql";
import { env } from "~/env.mjs";

export const gqlCli = initUrqlClient(
  {
    url: env.GQL_API_URL,
    exchanges: [fetchExchange],
  },
  false,
)!;
