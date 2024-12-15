/*
  Warnings:

  - You are about to drop the `QuestionTable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "QuestionTable";

-- CreateTable
CREATE TABLE "questionInfoTable" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "uid" TEXT,
    "questionName" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "userAnswer" TEXT,

    CONSTRAINT "questionInfoTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "problemSolvedTable" (
    "id" SERIAL NOT NULL,
    "uid" TEXT,
    "pid" TEXT,
    "userAnswer" TEXT,

    CONSTRAINT "problemSolvedTable_pkey" PRIMARY KEY ("id")
);
