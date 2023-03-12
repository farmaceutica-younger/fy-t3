-- DropIndex
DROP INDEX "EventTicket_eventId_token_idx";

-- CreateIndex
CREATE INDEX "EventTicket_id_token_idx" ON "EventTicket"("id", "token");
