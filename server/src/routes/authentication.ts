import { PrismaClient } from "@prisma/client";
import fastify, { FastifyInstance } from "fastify";
import { routes_data } from "../../globals";

const primsa_instance = new PrismaClient();
export default async function handleAuth(server: FastifyInstance) {
  // Experimental route
  server.post("/auth/signup_test", async (request: any, response: any) => {
    try {
      const someData = JSON.parse(request.body);
      console.log(`The data is ${someData}`);
      response.send(someData);
    } catch (error) {
      console.error(error);
    }
  });

  server.post("/auth/signup", async (request, response) => {
    const { name, email, password } = request.body;
    if (email && name && password) {
      const email_count = await primsa_instance.user.count({
        where: {
          email: email,
        },
      });

      if (email_count == 0) {
        const user_data = {
          name: name,
          email: email,
          password: password,
        };

        const new_user = await primsa_instance.user.create({
          data: user_data,
        });

        response.send({
          response: "Successfully created new user",
        });
      }

      response.code(404).send({
        response: "This user already exists or your missing a form input",
      });
    }
  });

  server.post("/auth/signin", async (request: any, response: any) => {
    try {
      // commented out for now since appropriate migration hasn't been made
      // const result = PrismaClient.User.findOne({
      //     where: {
      //         condition
      //     }
      // })
      console.error("successfully signed in");
    } catch (error) {
      console.error("There was an error loggin in : ", error);
    }
  });
}
routes_data.setRoutes(handleAuth);
// routes_data.routes.push(handleAuth);
