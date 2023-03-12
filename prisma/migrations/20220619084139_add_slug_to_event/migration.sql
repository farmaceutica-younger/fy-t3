/*
  Warnings:

  - You are about to drop the column `path` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "path",
ADD COLUMN     "slug" TEXT;
