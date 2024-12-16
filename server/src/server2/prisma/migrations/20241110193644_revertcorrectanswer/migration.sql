/*
  Warnings:

  - Added the required column `correctAnswer` to the `questionInfoTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "questionInfoTable" ADD COLUMN     "correctAnswer" TEXT NOT NULL;
