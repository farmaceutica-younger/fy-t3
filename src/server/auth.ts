import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { User as DbUser } from "@prisma/client";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type DefaultJWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";
import { adminbBot } from "./admin-bot";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      isAdmin: boolean;
      authorId: string;
      userId: string;
      isMember: boolean;
    } & DefaultSession["user"];
  }

  interface JWT extends DefaultJWT {
    authorId?: string;
    isAdmin?: boolean;
    userId: string;
    isMember: boolean;
  }

  interface User extends DbUser {}
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    session: ({ session, token }) => {
      if (session.user && token) {
        session.user.authorId = token.authorId as string;
        session.user.isAdmin = token.isAdmin as boolean;
        session.user.userId = token.userId as string;
        session.user.isMember = token.isMember as boolean;
      }
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        const membership = await prisma.associationMembership.findUnique({
          where: {
            id: user.id,
          },
        });
        token.authorId = user.authorId;
        token.isAdmin = user.isAdmin;
        token.userId = user.id;
        token.isMember = membership?.status === "COMPLETED";
      }
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    LinkedinProvider({
      clientId: env.LINKEDIN_CLIENT_ID,
      clientSecret: env.LINKEDIN_CLIENT_SECRET,
    }),
  ],
  events: {
    createUser: async ({ user }) => {
      const email = user.email!;
      await adminbBot.notifyUserCreated({ email });
    },
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
