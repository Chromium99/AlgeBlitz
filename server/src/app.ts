import getQuestion from "./routes/getQuestion";
import submitAnswer from "./routes/submitAnswer";
import playMode from "./routes/playModes";
import fastify from "fastify";

const server = fastify();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// these request and reply isn't being used
// so I left it as an underscore instead
// TODO : fix the types for these API endpoints
server.get("/ping", async (_request: any, _reply: any) => {
  return `listening at port ${PORT}`;
});
server.register(getQuestion);
server.register(submitAnswer);
server.register(playMode);

// TODO : fix this parameter type usage
server.listen({ port: PORT }, (err: any, address: any) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
