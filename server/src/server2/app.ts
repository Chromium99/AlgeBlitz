import getQuestion from "./routes/getQuestion";
import submitAnswer from "./routes/submitAnswer";
import playMode from "./routes/playModes";
import fastify from "fastify";

const server=fastify()


server.get('/ping', async (request, reply) => {
  return `listening at port 3400`
})
server.register(getQuestion)
server.register(submitAnswer)
server.register(playMode)

server.listen({ port: 3400 , host:'0.0.0.0'}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at 3400`)
})
server.get('/app',async(request, reply)=>
{
  return reply.send(`App is running in server 1, port ${3400}`)
})




