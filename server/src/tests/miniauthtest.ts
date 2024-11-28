import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/", async (req, reply) => {
  return { message: "Test route works!" };
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("Server running on http://localhost:3000");
  } catch (err) {
    console.error("Error starting server:", err);
  }
};

start();
