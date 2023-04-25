import { createTRPCRouter } from "~/server/api/trpc";
import { authorRouter } from "./routers/author.routers";
import { meRouter } from "./routers/me.routes";
import { associationRouter } from "./routers/associations.routes";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  me: meRouter,
  author: authorRouter,
  association: associationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
