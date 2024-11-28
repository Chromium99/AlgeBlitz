import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', async (req, reply) => {
  return { message: 'Hello, world!' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server is running at http://localhost:3000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
