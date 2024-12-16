/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `blitz` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `problemSolvedTable` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `puzzle` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `questionInfoTable` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `rampUp` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `survival` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "blitz_uid_key" ON "blitz"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "problemSolvedTable_uid_key" ON "problemSolvedTable"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "puzzle_uid_key" ON "puzzle"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "questionInfoTable_uid_key" ON "questionInfoTable"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "rampUp_uid_key" ON "rampUp"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "survival_uid_key" ON "survival"("uid");
