import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//sample data entry information
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
    console.log("New User Created:", questionInfoTable);
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
