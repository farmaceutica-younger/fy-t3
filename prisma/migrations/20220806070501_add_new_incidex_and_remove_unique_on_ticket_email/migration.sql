/*
  Warnings:

  - A unique constraint covering the columns `[email,eventId]` on the table `EventTicket` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "EventTicket_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "EventTicket_email_eventId_key" ON "EventTicket"("email", "eventId");
