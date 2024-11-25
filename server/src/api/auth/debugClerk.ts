import { clerkClient } from '@clerk/fastify';
import 'dotenv/config';


async function debugClerk() {
  console.log('Available methods on clerkClient.users:', Object.keys(clerkClient.users));
  console.log('CLERK_API_KEY:', process.env.CLERK_API_KEY);
  console.log('CLERK_SECRET_KEY:', process.env.CLERK_SEC);
  console.log('CLERK_PUBLISHABLE_KEY:', process.env.CLERK_PUBLISHABLE_KEY);

}

debugClerk();
