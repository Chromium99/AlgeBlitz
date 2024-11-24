# Use Node.js LTS as base image
FROM node:20-slim AS builder

# Set them as environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Set working directory
WORKDIR /app

# Install build essentials and OpenSSL for Prisma
RUN apt-get update -y && apt-get install -y openssl

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm ci

# Generate Prisma Client
RUN npx prisma generate

# Copy application code
COPY . .

# Build the application (if using TypeScript)
RUN npm run build

# Create production image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install OpenSSL for Prisma
RUN apt-get update -y && apt-get install -y openssl

# Copy built application from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Expose the port your Fastify app runs on
EXPOSE $PORT

# Start the application
CMD ["npm", "start"]