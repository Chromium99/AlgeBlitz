/*
  Warnings:

  - The primary key for the `questionInfoTable` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `questionInfoTable` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "questionInfoTable" DROP CONSTRAINT "questionInfoTable_pkey",
DROP COLUMN "id",
ADD COLUMN     "pid" SERIAL NOT NULL,
ADD CONSTRAINT "questionInfoTable_pkey" PRIMARY KEY ("pid");
