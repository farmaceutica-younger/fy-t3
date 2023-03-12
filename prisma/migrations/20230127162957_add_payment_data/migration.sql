-- CreateTable
CREATE TABLE "AssociationMembershipPayment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "method" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "note" TEXT NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "AssociationMembershipPayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AssociationMembershipPayment" ADD CONSTRAINT "AssociationMembershipPayment_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "AssociationMembership"("id") ON DELETE CASCADE ON UPDATE CASCADE;
