/*
  Warnings:

  - You are about to drop the column `organizerId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `taxNumber` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `accountHolder` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bankAccount` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bankName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `noTlp` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Coupon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `Organization` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_organizerId_fkey";

-- AlterTable
ALTER TABLE "public"."Event" DROP COLUMN "organizerId";

-- AlterTable
ALTER TABLE "public"."Organization" DROP COLUMN "address",
DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "logo",
DROP COLUMN "province",
DROP COLUMN "taxNumber",
ADD COLUMN     "accountHolder" TEXT,
ADD COLUMN     "bankAccount" TEXT,
ADD COLUMN     "bankName" TEXT,
ADD COLUMN     "photo" TEXT,
ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "accountHolder",
DROP COLUMN "bankAccount",
DROP COLUMN "bankName",
DROP COLUMN "noTlp",
ADD COLUMN     "phone" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_userId_key" ON "public"."Coupon"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_ownerId_key" ON "public"."Organization"("ownerId");
