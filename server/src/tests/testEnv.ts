import * as dotenv from 'dotenv';

dotenv.config();

console.log('CLERK_SECRET_KEY:', process.env.CLERK_SECRET_KEY || 'Not Found');
console.log('CLERK_PUBLISHABLE_KEY:', process.env.CLERK_PUBLISHABLE_KEY || 'Not Found');
