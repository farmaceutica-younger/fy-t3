import path from "path";
import { ProfileSchema } from "~/forms/profile/profile-schema";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const p = protectedProcedure;

export const meRouter = createTRPCRouter({
  profile: p.query(async ({ ctx }) => {
    return ctx.prisma.profile.findUnique({
      where: {
        id: ctx.user.userId,
      },
    });
  }),
  setProfile: p.input(ProfileSchema).mutation(async ({ input, ctx }) => {
    return await ctx.prisma.profile.upsert({
      create: {
        ...input,
        id: ctx.user.userId,
      },
      update: input,
      where: {
        id: ctx.user.userId,
      },
    });
  }),
  getAllInfo: p.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUniqueOrThrow({
      where: {
        id: ctx.user.userId,
      },
      include: {
        profile: true,
        membership: true,
      },
    });
    return user;
  }),
  profilePageData: p.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUniqueOrThrow({
      where: {
        id: ctx.user.userId,
      },
      include: {
        profile: true,
        membership: true,
      },
    });
    return user;
  }),
  getUploadSignature: p.mutation(({ ctx }) => {
    const folder = path.join("users", ctx.user.userId, "images");
    return ctx.cloudinary.getUploadSignature(folder);
  }),
});
