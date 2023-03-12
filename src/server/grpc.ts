import { env } from "~/env.mjs";
import * as blogGrpc from "~/proto/fy/blog/v1/blogv1srv";
import * as eventGrpc from "~/proto/fy/blog/v1/eventsv1srv";
import { CreateClientContructor, promisifyAll } from "~/utils/grpc-promisify";

const NewBlogClient = CreateClientContructor(blogGrpc.BlogSrvClient);
const NewEventsClient = CreateClientContructor(eventGrpc.EventsSrvClient);

export type BlogClient = promisifyAll<blogGrpc.BlogSrvClient>;
export type EventsClient = promisifyAll<eventGrpc.EventsSrvClient>;

const grpcConfig = {
  host: env.GRPC_SERVER_HOST,
  skipTLS: true,
};

export const blogs = NewBlogClient(grpcConfig);
export const events = NewEventsClient(grpcConfig);
