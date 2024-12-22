import { FastifyInstance } from "fastify";
import { PrismaClient } from '@prisma/client';
//import prisma from '../prisma'; // can use this too, but i dunno why it isn't working


const prisma = new PrismaClient();

export async function progressRoutes(fastify: FastifyInstance) {
    fastify.post<{ Body: { userId: string; lessonId: string; completed: boolean; accuracy: number } }>(
      '/progress',
      async (request, reply) => {
        const { userId, lessonId, completed, accuracy } = request.body;
        try {
          const progress = await prisma.progress.create({
            data: { userId, lessonId, completed, accuracy },
          });
          reply.send(progress);
        } catch (error) {
          reply.status(500).send({ error: 'Failed to create progress' });
        }
      }
    );

    fastify.get<{ Params: {userId: string } }>('/progress/:userId', async (request, reply) => {
        const { userId } = request.params;
        try {
            const progress = await prisma.progress.findMany({
                where: { userId },
            });
            reply.send(progress);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch progress' });
        }
    });
}