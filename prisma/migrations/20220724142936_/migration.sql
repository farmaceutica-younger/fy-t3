/*
  Warnings:

  - A unique constraint covering the columns `[id,token]` on the table `EventTicket` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "EventTicket_id_token_idx";

-- CreateIndex
CREATE UNIQUE INDEX "EventTicket_id_token_key" ON "EventTicket"("id", "token");
