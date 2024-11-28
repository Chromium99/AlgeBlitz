import fastify from "fastify";
import { clerkPlugin, getAuth } from "@clerk/fastify";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();


console.log('CLERK_SECRET_KEY:', process.env.CLERK_SECRET_KEY || 'Not Found');
console.log('CLERK_PUBLISHABLE_KEY:', process.env.CLERK_PUBLISHABLE_KEY || 'Not Found');

const app = fastify({ logger: true });

// Register Clerk middleware
app.register(clerkPlugin);

app.get("/protected-route", async (req, reply) => {
  try {
    const { userId } = getAuth(req); // Retrieve userId from Clerk

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

// Start the server
app.listen({ port: 3000 }, () => {
  console.log("Server running on http://localhost:3000");
});
