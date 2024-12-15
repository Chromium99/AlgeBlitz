/*
  Warnings:

  - The primary key for the `questionInfoTable` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "questionInfoTable" DROP CONSTRAINT "questionInfoTable_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "pid" DROP NOT NULL,
ALTER COLUMN "pid" DROP DEFAULT,
ALTER COLUMN "pid" SET DATA TYPE TEXT,
ADD CONSTRAINT "questionInfoTable_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "questionInfoTable_pid_seq";
