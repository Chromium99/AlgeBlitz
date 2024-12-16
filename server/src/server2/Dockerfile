FROM node
WORKDIR /app
COPY package.json ./
RUN npm install fastify
COPY . .
EXPOSE 3400
CMD ["npm", "run", "dev"]