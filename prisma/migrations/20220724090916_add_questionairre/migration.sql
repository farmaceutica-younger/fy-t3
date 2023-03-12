-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "questionairre" JSONB[] DEFAULT ARRAY[]::JSONB[];

-- AlterTable
ALTER TABLE "EventTicket" ADD COLUMN     "answers" JSONB[] DEFAULT ARRAY[]::JSONB[];
