import prisma from '../prisma';

export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function linkUserWithDatabase(userId: string, email: string) {
  let user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: userId,
        email,
      },
    });
  }

  return user;
}
