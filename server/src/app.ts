import fastify from "fastify";
import { routes_data } from "../globals";
import { routes } from "./routes/routes";

// a bit of functional programming
// immediate execution of function
// this is an annoynomous function that will execute when "yarn dev" is run
// treat this as the "main" function
(() => {
  const server = fastify();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  server.get("/ping", async (_request: any, _reply: any) => {
    return `listening at port ${PORT}`;
  });

  // optimized format of code
  // should trigger an API call to get the current list of routes on global storage
  console.log(routes_data.routes);
  // routes_data.routes.forEach((route) => {
  //   server.register(route);
  // });
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

// NOTE : the data will be lost if I use it within app.ts
// console.log(`Current routes_data : ${routes_data.routes}`);
