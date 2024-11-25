import fastify from "fastify";
import Clerk, { getAuth } from "@clerk/fastify";
import "dotenv/config";

const app = fastify();

// Initialize Clerk middleware (reads keys from environment variables)
app.register(Clerk);

app.get("/protected-route", async (req, reply) => {
  try {
    const { userId } = getAuth(req); // Correctly retrieve user ID from Clerk

    if (!userId) {
      reply.status(401).send({ message: "Unauthorized" });
      return;
    }

    reply.send({ message: `Hello user ${userId}` });
  } catch (error) {
    console.error("Error in /protected-route:", error);
    reply.status(500).send({ message: "Internal Server Error" });
  }
});

app.listen({ port: 3000 }, () => {
  console.log("Server running on http://localhost:3000");
});
