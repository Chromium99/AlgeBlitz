import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { routes_data } from "../../globals";

const prisma = new PrismaClient();

/**
 * @usage The function considers the following GET method endpoints:
 *  '/playmode/blitz/:uid'
 *   '/playmode/survival/:uid'
 *   '/playmode/rampUp/:uid'
 *   '/playmode/puzzle/:uid'
 *
 * Each endpoint has a playmode (blitz, survival, rampUp, puzzle) parameter and requires a user uid.
 * When each of the endpoints are called with a uid, the score of a particular user is returned.
 *
 * The function also considers the following POST method endpoints:
 *
 * '/playmode/blitz'
 * '/playmode/survival'
 * '/playmode/rampUp'
 * '/playmode/puzzle'
 *
 * Each endpoint has a playmode (blitz, survival, rampUp, puzzle) parameter.
 * Each of these endpoints require the following information to be passed in the body: uid and score.
 * When each of the endpoints are accordingly called, the score field corresponding to a table (blitz, survival, rampUp, puzzle)
 * in the database of a particular user associated with the uid gets updated with the score information from the body.
 *
 * @param {import ('fastify').FastifyInstance} server  The Fastify server instance
 *
 * @returns {Promise<Object|Error>} The GET endpoints returns a score of a particular user or an error message if a problem occurs.
 *  The POST endpoints return a message stating the score information has been stored in a particular table or an error if a problem occurs.
 */

export default async function playMode(server: FastifyInstance) {
  server.get<{ Params: { uid: string } }>(
    "/playmode/blitz/:uid",
    async (request, reply) => {
      try {
        const { uid } = request.params;

        const userScore = await prisma.blitz.findMany({
          where: {
            uid: uid,
          },
        });

        return reply.send(userScore[0].score);
      } catch (error) {
        console.log("Error: ", error);
        return reply.status(500).send({ error: "Internal server error" });
      }
    }
  );
  server.post<{ Body: { uid: string; score: string } }>(
    "/playmode/blitz",
    async (request, reply) => {
      const { uid, score } = request.body;
      try {
        const scoreUpdate = await prisma.blitz.upsert({
          where: {
            uid: uid,
          },
          update: {
            score: score,
          },
          create: {
            uid: uid,
            score: score,
          },
        });
        return reply.send(
          `The following information has been uploaded/updated in the blitz table of the database: ${uid} and ${score}`
        );
      } catch (error) {
        return reply.send(`Eroor: ${error}`);
      }
    }
  );

  server.get<{ Params: { uid: string } }>(
    "/playmode/survival/:uid",
    async (request, reply) => {
      try {
        const { uid } = request.params;

        const userScore = await prisma.survival.findMany({
          where: {
            uid: uid,
          },
        });

        return reply.send(userScore[0].score);
      } catch (error) {
        console.log("Error: ", error);
        return reply.status(500).send({ error: "Internal server error" });
      }
    }
  );
  server.post<{ Body: { uid: string; score: string } }>(
    "/playmode/survival",
    async (request, reply) => {
      const { uid, score } = request.body;
      try {
        const scoreUpdate = await prisma.survival.upsert({
          where: {
            uid: uid,
          },
          update: {
            score: score,
          },
          create: {
            uid: uid,
            score: score,
          },
        });
        return reply.send(
          `The following information has been uploaded/updated in the survival table of the database: ${uid} and ${score}`
        );
      } catch (error) {
        return reply.send(`Error: ${error}`);
      }
    }
  );

  server.get<{ Params: { uid: string } }>(
    "/playmode/rampUp/:uid",
    async (request, reply) => {
      try {
        const { uid } = request.params;

        const userScore = await prisma.rampUp.findMany({
          where: {
            uid: uid,
          },
        });

        return reply.send(userScore[0].score);
      } catch (error) {
        console.log("Error: ", error);
        return reply.status(500).send({ error: "Internal server error" });
      }
    }
  );

  server.post<{ Body: { uid: string; score: string } }>(
    "/playmode/rampUp",
    async (request, reply) => {
      const { uid, score } = request.body;
      try {
        const scoreUpdate = await prisma.rampUp.upsert({
          where: {
            uid: uid,
          },
          update: {
            score: score,
          },
          create: {
            uid: uid,
            score: score,
          },
        });
        return reply.send(
          `The following information has been uploaded/updated in the rampUp table of the database: ${uid} and ${score}`
        );
      } catch (error) {
        return reply.send(`Error: ${error}`);
      }
    }
  );

  server.get<{ Params: { uid: string } }>(
    "/playmode/puzzle/:uid",
    async (request, reply) => {
      try {
        const { uid } = request.params;

        const userScore = await prisma.puzzle.findMany({
          where: {
            uid: uid,
          },
        });

        return reply.send(userScore[0].score);
      } catch (error) {
        console.log("Error: ", error);
        return reply.status(500).send({ error: "Internal server error" });
      }
    }
  );
  server.post<{ Body: { uid: string; score: string } }>(
    "/playmode/puzzle",
    async (request, reply) => {
      const { uid, score } = request.body;
      try {
        const scoreUpdate = await prisma.puzzle.upsert({
          where: {
            uid: uid,
          },
          update: {
            score: score,
          },
          create: {
            uid: uid,
            score: score,
          },
        });
        return reply.send(
          `The following information has been uploaded/updated in the puzzle table of the database: ${uid} and ${score}`
        );
      } catch (error) {
        return reply.send(`Error: ${error}`);
      }
    }
  );
}

// adds the data at the end
routes_data.setRoutes(playMode);
