import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//sample data entry information

/**
 * @usage Creates a sample question data in the questionInfoTable in postgres. It also creates a null entry in problemSolvedTable.
 * @returns A console.log saying question is created in the database.
 */
async function main() {
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
            

        }
    });
    const problemSolvedTable=await prisma.problemSolvedTable.create({
        data:{
            uid: null,
            pid: null,
            userAnswer: null,
        }
    })
    console.log("New Question Created:", questionInfoTable);
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
