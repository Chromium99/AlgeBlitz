// import fastify from "fastify";
// import { clerkPlugin, getAuth } from "@clerk/fastify";
// import "dotenv/config";

// const app = fastify();

// // Initialize Clerk middleware (reads keys from environment variables)
// app.register(clerkPlugin);

// app.get("/protected-route", async (req, reply) => {
//   try {
//     const { userId } = getAuth(req); // Correctly retrieve user ID from Clerk

//     if (!userId) {
//       reply.status(401).send({ message: "Unauthorized" });
//       return;
//     }

//     reply.send({ message: `Hello user ${userId}` });
//   } catch (error) {
//     console.error("Error in /protected-route:", error);
//     reply.status(500).send({ message: "Internal Server Error" });
//   }
// });

// app.listen({ port: 3000 }, () => {
//   console.log("Server running on http://localhost:3000");
// });
import 'dotenv/config'
import Fastify, { FastifyPluginCallback } from 'fastify'
import { clerkClient, clerkPlugin, getAuth } from '@clerk/fastify'
import prisma from '../../prisma'
import { getAllUsers } from '../../services/userService';

const fastify = Fastify({ logger: true })


const protectedRoutes: FastifyPluginCallback = (instance, options, done) => {
  instance.register(clerkPlugin)

  // protected routes
  instance.get('/protected', async (request, reply) => {
    const { userId } = getAuth(request)

    if (!userId) {
      return reply.code(403).send({ message: 'Access denied. Authentication required.' })
    }

    const user = await clerkClient.users.getUser(userId)

    reply.send({ message: 'This is a protected route.', user })
  })

  // Admin-Only route
  instance.get('/admin', async (request, reply) => {
    const { userId } = getAuth(request)

    if (!userId) {
        return reply.code(403).send({ message: 'Access denied. Authentication required'})
    }

    const user = await clerkClient.users.getUser(userId)

    // check if the admin is based on metadata
    if (user.publicMetadata.role !== 'admin') {
        return reply.code(403).send({ message: 'Access denied. Admin only.'})
    }

    reply.send({ message: 'Welcome, Admin.'})
  })

  // Profile route

  interface UpdateProfileBody {
    email: string
    name: string
  }

  instance.post<{ Body: UpdateProfileBody }>('/update-profile', async (request, reply) => {
    const { userId } = getAuth(request)

    if (!userId) {
      return reply.code(403).send({ message: 'Access denied. Authentication required.' })
    }

    // simulated update logic
    const { email, name } = request.body
    await clerkClient.users.updateUser(userId, {
      primaryEmailAddressID: email,
      full_name: name,
    })

    reply.send({ message: 'Profile updated successfully!' })
  })

  done()
}


// Public Routes
const publicRoutes: FastifyPluginCallback = (instance, options, done) => {
  instance.get('/', async (request, reply) => {
    reply.send({ message: 'This is a public route.' });
  });

  // fetches users from the database
  instance.get('/users', async (req, reply) => {
    try {
      const users = await prisma.user.findMany(); // this will use prisma to fetch all users
      reply.send(users);
    } catch (error) {
      reply.code(500).send({
        message: 'Error fetching users',
        error: (error as Error).message,
      });
    }
  });

  done();
};


// integrating clerk users with our database. 
// TODO: need to work on this one a bit and see how we can do this
const userDatabaseIntegrationRoutes: FastifyPluginCallback = (instance, options, done) => {
  instance.post('/link-user-db', async (request, reply) => {
    const { userId } = getAuth(request);

    if (!userId) {
      return reply.code(403).send({ message: 'Access denied. Authentication required.' });
    }

    try {
      const user = await clerkClient.users.getUser(userId);

      // Checks if the user already exists in the database
      let prismaUser = await prisma.user.findUnique({ where: { id: user.id } });

      if (!prismaUser) {
        prismaUser = await prisma.user.create({
          data: {
            id: user.id,
            email: user.emailAddresses[0]?.emailAddress || '', // Added this safeguard for missing email
          },
        });
      }

      reply.send({ message: 'User successfully linked with database.', prismaUser });
    } catch (error) {
      console.error('Error linking user:', error);
      reply.code(500).send({
        message: 'Internal server error.',
        error: (error as Error).message, 
      });
    }
  });

  done();
};

// Oauth route

const oauthRoutes: FastifyPluginCallback = (instance, options, done) => {
    instance.get('/oauth/callback', async (request, reply) => {
        //TODO: placeholder, so come back and see we can do since clerk already does OAuth
        reply.send({ message: "OAuth callback successful."})
    })

    done()
}


// register routes
fastify.register(protectedRoutes)
fastify.register(publicRoutes)
fastify.register(userDatabaseIntegrationRoutes)
fastify.register(oauthRoutes)

// error handling
fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error)
    reply.status(500).send({ message: 'Internal Server Error', error: error.message })
})

// To Start up the server
const start = async () => {
  try {
    await fastify.listen({ port: 8080 })
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}


start()