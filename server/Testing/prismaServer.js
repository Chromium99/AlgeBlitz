import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//sample data entry information

/**
 * @usage Creates sample data in the questionInfoTable, blitz, rampUp, survival, and puzzle tables in postgres. It also creates a null entry in problemSolvedTable.
 * @returns A console.log informing that data has been created in the database.
 */
async function main() {
  // sample data insert example
  const questionInfoTable = await prisma.questionInfoTable.create({
    data: {
      pid: "2",
      category: "Algebra",
      difficulty: "Medium",
      type: "short response",
      uid: "3",
      questionName: "What is the square of 4?",
      correctAnswer: "2",
      choices: ["1", "2"],
    },
  });
  const problemSolvedTable = await prisma.problemSolvedTable.create({
    data: {
      uid: null,
      pid: null,
      userAnswer: null,
    },
  });

  const blitz = await prisma.blitz.create({
    data: {
      uid: "sample1",
      score: "99",
    },
  });
  const puzzle = await prisma.puzzle.create({
    data: {
      uid: "sample1",
      score: "99",
    },
  });
  const rampUp = await prisma.rampUp.create({
    data: {
      uid: "sample1",
      score: "99",
    },
  });
  const survival = await prisma.survival.create({
    data: {
      uid: "sample1",
      score: "99",
    },
  });
  console.log("Information created");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
