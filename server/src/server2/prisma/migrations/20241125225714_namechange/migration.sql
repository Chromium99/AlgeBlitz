/*
  Warnings:

  - You are about to drop the `blitzMode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `puzzleMode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `survivalMode` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "blitzMode";

-- DropTable
DROP TABLE "puzzleMode";

-- DropTable
DROP TABLE "survivalMode";

-- CreateTable
CREATE TABLE "blitz" (
    "id" SERIAL NOT NULL,
    "uid" TEXT,
    "score" TEXT,

    CONSTRAINT "blitz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "survival" (
    "id" SERIAL NOT NULL,
    "uid" TEXT,
    "score" TEXT,

    CONSTRAINT "survival_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "puzzle" (
    "id" SERIAL NOT NULL,
    "uid" TEXT,
    "score" TEXT,

    CONSTRAINT "puzzle_pkey" PRIMARY KEY ("id")
);
