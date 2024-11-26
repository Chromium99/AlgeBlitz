import getQuestion from "./routes/getQuestion";
import submitAnswer from "./routes/submitAnswer";
import playMode from "./routes/playModes";
import fastify from "fastify";
const server=fastify()
const PORT=process.env.PORT? parseInt(process.env.PORT, 10):3000;

server.get('/ping', async (request, reply) => {
  return `listening at port ${PORT}`
})
server.register(getQuestion)
server.register(submitAnswer)
server.register(playMode)

server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})