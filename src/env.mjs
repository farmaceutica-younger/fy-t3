import { z } from "zod";

/**
 * Specify your server-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars.
 */
const server = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET:
    process.env.NODE_ENV === "production"
      ? z.string().min(1)
      : z.string().min(1).optional(),
  NEXTAUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth.js automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string().min(1) : z.string().url()
  ),
  // Add `.min(1) on ID and SECRET if you want to make sure they're not empty
  LINKEDIN_CLIENT_ID: z.string(),
  LINKEDIN_CLIENT_SECRET: z.string(),

  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),

  BASE_URL: z.string().url().default("https://www.farmaceuticayounger.science"),

  // Telegram
  TELEGRAM_BOT_TOKEN: z.string(),
  TELEGRAM_ADMIN_CHAT_ID: z.string(),

  GRPC_SERVER_HOST: z.string(),

  GQL_API_URL: z.string().url(),

  // cloudinary
  CLOUDINARY_BASE_FOLDER: z.string().default("dev"),
  CLOUDINARY_KEY: z.string(),
  CLOUDINARY_SECRET: z.string(),
  CLOUDINARY_CLOUD_NAME: z.string(),

  // kannon
  KANNON_API_URL: z.string(),
  KANNON_API_KEY: z.string(),
  KANNON_DOMAIN: z.string(),
  KANNON_FROM_ALIAS: z.string(),
  KANNON_FROM_EMAIL: z.string(),
});

/**
 * Specify your client-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars. To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
const client = z.object({
  // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
 * middlewares) or client-side so we need to destruct manually.
 *
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */
const processEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  LINKEDIN_CLIENT_ID: process.env.LINKEDIN_CLIENT_ID,
  LINKEDIN_CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET,

  BASE_URL: process.env.BASE_URL,

  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  TELEGRAM_ADMIN_CHAT_ID: process.env.TELEGRAM_ADMIN_CHAT_ID,

  GRPC_SERVER_HOST: process.env.GRPC_SERVER_HOST,

  GQL_API_URL: process.env.GQL_API_URL,

  CLOUDINARY_BASE_FOLDER: process.env.CLOUDINARY_BASE_FOLDER,
  CLOUDINARY_KEY: process.env.CLOUDINARY_KEY,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,

  KANNON_API_URL: process.env.KANNON_API_URL,
  KANNON_API_KEY: process.env.KANNON_API_KEY,
  KANNON_DOMAIN: process.env.KANNON_DOMAIN,
  KANNON_FROM_ALIAS: process.env.KANNON_FROM_ALIAS,
  KANNON_FROM_EMAIL: process.env.KANNON_FROM_EMAIL,
};

// Don't touch the part below
// --------------------------

const merged = server.merge(client);

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let env = /** @type {MergedOutput} */ (process.env);

if (!!process.env.SKIP_ENV_VALIDATION == false) {
  const isServer = typeof window === "undefined";

  const parsed = /** @type {MergedSafeParseReturn} */ (
    isServer
      ? merged.safeParse(processEnv) // on server we can validate all env vars
      : client.safeParse(processEnv) // on client we can only validate the ones that are exposed
  );

  if (parsed.success === false) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors
    );
    throw new Error("Invalid environment variables");
  }

  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== "string") return undefined;
      // Throw a descriptive error if a server-side env var is accessed on the client
      // Otherwise it would just be returning `undefined` and be annoying to debug
      if (!isServer && !prop.startsWith("NEXT_PUBLIC_"))
        throw new Error(
          process.env.NODE_ENV === "production"
            ? "❌ Attempted to access a server-side environment variable on the client"
            : `❌ Attempted to access server-side environment variable '${prop}' on the client`
        );
      return target[/** @type {keyof typeof target} */ (prop)];
    },
  });
}

export { env };
