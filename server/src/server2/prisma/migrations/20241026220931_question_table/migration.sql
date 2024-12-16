/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "QuestionTable" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "uid" TEXT NOT NULL,
    "questionName" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "userAnswer" TEXT NOT NULL,

    CONSTRAINT "QuestionTable_pkey" PRIMARY KEY ("id")
);
