-- CreateTable
CREATE TABLE "PharmaItaly" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "companyName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "region" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "province" TEXT NOT NULL,

    CONSTRAINT "PharmaItaly_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PharmaItaly_region_idx" ON "PharmaItaly"("region");

-- CreateIndex
CREATE INDEX "PharmaItaly_region_province_idx" ON "PharmaItaly"("region", "province");
