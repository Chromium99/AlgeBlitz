import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const newUser = await prisma.user.create({
        data: {
            email: "example@gmail.com",
            name: "John Doe"
        }
    });
    console.log("New User Created:", newUser);
}

main()
    .then(async () => {  // Fix: Changed 'aync' to 'async'
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });