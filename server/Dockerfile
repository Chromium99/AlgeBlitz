# Use Node.js LTS as base image
FROM node:20-slim AS builder

# Set working directory
WORKDIR /usr/src/app

# Install dependencies required for Prisma
RUN apt-get update && apt-get install -y openssl

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm ci

# Generate Prisma Client
RUN npx prisma generate

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Create production image
FROM node:20-slim

# Install dependencies required for Prisma
RUN apt-get update && apt-get install -y openssl

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Set working directory
WORKDIR /usr/src/app

# Copy built application from builder
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma

# Expose the port your Fastify app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]