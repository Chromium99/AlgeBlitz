import fastify from "fastify";
import { routes } from "./routes/routes";

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

  server.addHook("onRoute", (routeOptions) => {
    routeOptions.url;
    console.log(routeOptions.url);
  });
  // server.register(getQuestion);
  // server.register(submitAnswer);
  // server.register(playMode);

  // TODO : fix this parameter type usage

  server.listen({ port: PORT }, (err: any, address: any) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();
