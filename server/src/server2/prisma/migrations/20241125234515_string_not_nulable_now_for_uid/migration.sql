/*
  Warnings:

  - Made the column `uid` on table `blitz` required. This step will fail if there are existing NULL values in that column.
  - Made the column `uid` on table `problemSolvedTable` required. This step will fail if there are existing NULL values in that column.
  - Made the column `uid` on table `puzzle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `uid` on table `questionInfoTable` required. This step will fail if there are existing NULL values in that column.
  - Made the column `uid` on table `rampUp` required. This step will fail if there are existing NULL values in that column.
  - Made the column `uid` on table `survival` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "blitz" ALTER COLUMN "uid" SET NOT NULL;

-- AlterTable
ALTER TABLE "problemSolvedTable" ALTER COLUMN "uid" SET NOT NULL;

-- AlterTable
ALTER TABLE "puzzle" ALTER COLUMN "uid" SET NOT NULL;

-- AlterTable
ALTER TABLE "questionInfoTable" ALTER COLUMN "uid" SET NOT NULL;

-- AlterTable
ALTER TABLE "rampUp" ALTER COLUMN "uid" SET NOT NULL;

-- AlterTable
ALTER TABLE "survival" ALTER COLUMN "uid" SET NOT NULL;
