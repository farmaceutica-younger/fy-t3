-- CreateEnum
CREATE TYPE "MembershipStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('NORMAL', 'ONORARY', 'DIRECTORIAL');

-- CreateTable
CREATE TABLE "AssociationMembership" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "MembershipStatus" NOT NULL DEFAULT 'PENDING',
    "type" "MembershipType" NOT NULL DEFAULT 'NORMAL',

    CONSTRAINT "AssociationMembership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssociationQuestionairre" (
    "id" TEXT NOT NULL,
    "version" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "questions" JSONB[],

    CONSTRAINT "AssociationQuestionairre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssociationQuestionairreAnswer" (
    "id" TEXT NOT NULL,
    "timestmap" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "answers" JSONB NOT NULL,
    "userId" TEXT NOT NULL,
    "questionairreId" TEXT NOT NULL,
    "associationMembershipId" TEXT NOT NULL,

    CONSTRAINT "AssociationQuestionairreAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AssociationMembership_createdAt_status_idx" ON "AssociationMembership"("createdAt", "status");

-- AddForeignKey
ALTER TABLE "AssociationMembership" ADD CONSTRAINT "AssociationMembership_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssociationQuestionairreAnswer" ADD CONSTRAINT "AssociationQuestionairreAnswer_questionairreId_fkey" FOREIGN KEY ("questionairreId") REFERENCES "AssociationQuestionairre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssociationQuestionairreAnswer" ADD CONSTRAINT "AssociationQuestionairreAnswer_associationMembershipId_fkey" FOREIGN KEY ("associationMembershipId") REFERENCES "AssociationMembership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
