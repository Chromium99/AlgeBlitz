import fastify from "fastify";
import { routes } from "./routes/routes";
// import handleAuth from "./routes/authentication";
// import getQuestion from "./routes/getQuestion";
// import playMode from "./routes/playModes";
// import submitAnswer from "./routes/submitAnswer";

// routes_data.displayRoutes();

// a bit of functional programming
// immediate execution of function
(() => {
  const server = fastify();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  server.get("/ping", async (_request: any, _reply: any) => {
    return `listening at port ${PORT}`;
  });

  routes.forEach((route) => {
    server.register(route);
  });

  // server.register(getQuestion);
  // server.register(submitAnswer);
  // server.register(playMode);
  // server.register(handleAuth);

  server.addHook("onRoute", async (routeOptions) => {
    await routeOptions.url;
    console.log(routeOptions.url);
  });

  // TODO : fix this parameter type usage

  server.listen({ port: PORT }, (err: any, address: any) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();
