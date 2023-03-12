import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
async function main() {
  await db.account.create({
    data: {
      id: "cl5z594ji01031h5co1s8p5cf",
      userId: "cl5z594j300961h5clvm1c1jk",
      provider: "google",
      type: "oauth",
      providerAccountId: "107829519248333049239",
    },
  });
}

main();
