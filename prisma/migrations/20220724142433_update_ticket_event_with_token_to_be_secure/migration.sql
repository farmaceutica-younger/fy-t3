/*
  Warnings:

  - The `answers` column on the `EventTicket` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "EventTicket" ADD COLUMN     "token" TEXT,
DROP COLUMN "answers",
ADD COLUMN     "answers" JSONB;

-- CreateIndex
CREATE INDEX "EventTicket_eventId_token_idx" ON "EventTicket"("eventId", "token");
