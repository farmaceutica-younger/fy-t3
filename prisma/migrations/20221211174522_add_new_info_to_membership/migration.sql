-- AlterEnum
ALTER TYPE "MembershipStatus" ADD VALUE 'COMPLETED';

-- AlterTable
ALTER TABLE "AssociationMembership" ADD COLUMN     "memberSince" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "memberUntil" TIMESTAMP(3);
