import fastify from "fastify";
import { clerkPlugin, getAuth } from "@clerk/fastify";

const CLERK_SECRET_KEY = "sk_test_123"; // Replace with your actual Clerk secret key
const CLERK_PUBLISHABLE_KEY = "pk_test_123"; // Replace with your actual Clerk publishable key

console.log("Using hardcoded Clerk keys:");
console.log("CLERK_SECRET_KEY:", CLERK_SECRET_KEY);
console.log("CLERK_PUBLISHABLE_KEY:", CLERK_PUBLISHABLE_KEY);

const app = fastify({ logger: true });

app.register(clerkPlugin, {
  secretKey: CLERK_SECRET_KEY,
  publishableKey: CLERK_PUBLISHABLE_KEY,
});

app.get("/protected-route", async (req, reply) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return reply.status(401).send({ message: "Unauthorized" });
    }

    reply.send({ message: `Hello user ${userId}` });
  } catch (error) {
    console.error("Error in /protected-route:", error);
    reply.status(500).send({ message: "Internal Server Error" });
  }
});


app.get("/", async (req, reply) => {
  return { message: "Basic test route works!" };
});

const start = async () => {
  try {
    console.log("Starting the Fastify server...");
    await app.listen({ port: 3000 });
    console.log("Server is running at http://localhost:3000");
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

start();
