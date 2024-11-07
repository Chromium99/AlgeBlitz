import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();
const prisma = new PrismaClient();

//@see https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction#3-importing-prisma-client
