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


process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY);
console.log("CLERK_PUBLISHABLE_KEY:", process.env.CLERK_PUBLISHABLE_KEY);
console.log("Current working directory:", process.cwd());

console.log("Starting sampleauth.ts...")

import dotenv from 'dotenv';
dotenv.config({ path: './server/.env'})
console.log("dotenv loaded.");

import Fastify, { FastifyPluginCallback } from 'fastify'
console.log("Fastify loaded.");

import { clerkClient, clerkPlugin, getAuth } from '@clerk/fastify'
console.log("Clerk plugins loaded.");

import prisma from '../../prisma'
console.log("Prisma loaded.");

import { getAllUsers } from '../../services/userService';
console.log("User service loaded.");

console.log("Imports loaded Successfully...")

const fastify = Fastify({ logger: true })

console.log("Starting basic Fastify server...");

const protectedRoutes: FastifyPluginCallback = (instance, options, done) => {
  //instance.register(clerkPlugin)

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
    const { email, name } = request.body;

  // Assuming `name` is a full name, split into firstName and lastName
  const [firstName, ...lastNameParts] = name.split(' ');
  const lastName = lastNameParts.join(' '); // Handle cases where last name has spaces

  try {
    // Update the user with Clerk
    await clerkClient.users.updateUser(userId, {
      primaryEmailAddressID: email, 
      firstName,
      lastName,
    });

    reply.send({ message: 'Profile updated successfully!' });
  } catch (error) {
    console.error('Error updating profile:', error);
    reply.code(500).send({
      message: 'Error updating profile.',
      error: (error as Error).message,
    });
  }
});
done()
};

// Public Routes
const publicRoutes: FastifyPluginCallback = (instance, options, done) => {
  instance.get('/publicRoute2', async (request, reply) => { //this one is being annoying
    reply.send({ message: 'This is a public route.' });
  });

  // fetches users from the database
  // if we use token auth, we don't need this
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

  instance.get('/inspect-update-fields', async (req, reply) => {
    const fields = Object.keys(clerkClient.users);
    reply.send({ message: 'Available methods on Clerk users:', fields });
  });

  //fastify.register(publicRoutes);

  done()
};


// integrating clerk users with our database. 
// TODO: need to work on this one a bit and see how we can do this
// if token auth, we need this one
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


// Add a simple test route
fastify.get('/', async (req, reply) => {
  return { message: 'Basic test route works!' };
});

// To Start up the server
const start = async () => {
  try {
    console.log("Starting the Fastify server...");
    await fastify.listen({ port: 3000 });
    console.log("Server is running at http://localhost:3000");
  } catch (error) {
    console.error("Error starting the server:", error);
    fastify.log.error(error);
    process.exit(1);
  }
};

start();