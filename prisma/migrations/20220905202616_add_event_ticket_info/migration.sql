-- AlterTable
ALTER TABLE "EventTicket" ADD COLUMN     "firstName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "lastName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "linkedinUrl" TEXT;
