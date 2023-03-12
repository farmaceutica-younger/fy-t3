/*
  Warnings:

  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AssociationMembership" ADD COLUMN     "profileId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "credits" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "email" SET NOT NULL;

-- CreateTable
CREATE TABLE "CreditsTransaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,
    "reason" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CreditsTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberLocation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "location" JSONB NOT NULL,
    "name" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobField" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "linkedinUrl" TEXT,
    "privacySigned" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MemberLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolitiIgnotiGame" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "ignoti" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "isLive" BOOLEAN NOT NULL DEFAULT false,
    "status" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "SolitiIgnotiGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolitiIgnotiParticipant" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gameId" TEXT NOT NULL,
    "responses" JSONB[],
    "creditsTransferred" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SolitiIgnotiParticipant_pkey" PRIMARY KEY ("id","gameId")
);

-- AddForeignKey
ALTER TABLE "CreditsTransaction" ADD CONSTRAINT "CreditsTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssociationMembership" ADD CONSTRAINT "AssociationMembership_profile_id_fkey" FOREIGN KEY ("id") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberLocation" ADD CONSTRAINT "MemberLocation_id_fkey" FOREIGN KEY ("id") REFERENCES "AssociationMembership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolitiIgnotiParticipant" ADD CONSTRAINT "SolitiIgnotiParticipant_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "SolitiIgnotiGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolitiIgnotiParticipant" ADD CONSTRAINT "SolitiIgnotiParticipant_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
