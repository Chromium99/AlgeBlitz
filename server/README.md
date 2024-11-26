## Backend

The `backend` subfolder contains the server-side code for the AlgeBlitz project. This includes the Express server setup, middleware configuration, and API endpoints.

### Structure

backend/
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
├── src/ │
├──── app.ts │

### Getting Started

To get started with the backend, follow these steps:

1. **Install Dependencies**: Navigate to the backend directory and install the necessary dependencies.
   ```sh
   cd backend
   npm install
   ```
2. **Run the Development Server**: Start the development server using nodemon to automatically restart the server on file changes.

   ```sh
   npm run dev
   ```

3. **Build the Project (For Production)**: Compile the TypeScript code to JavaScript.

   ```sh
   npm run build
   ```

4. **Start the Server (For Production)**: Start the server using the compiled JavaScript files.

   ```sh
   npm start
   ```

### Configuration

The backend uses the following configuration files:

- **`tsconfig.json`**: TypeScript configuration file.
- **`package.json`**: Contains scripts and dependencies for the backend.

### Running Docker Compose

#### Prerequisites

- Ensure Docker, Docker Desktop and Docker Compose are installed on your machine.
- Verify Docker is running by executing `docker --version` and `docker-compose --version` in your terminal.
- Make sure to have Docker Desktop opened before running the steps.

#### Steps to Run Docker Compose

1. **Navigate to the Project Directory:**
   Open your terminal and change the directory to the location of your `compose.yaml` file.
   ```sh
   cd backend
   ```
2. **Build and Start Containers:**
   Use the following command to build and start the containers defined in your `compose.yaml` file.

   ```sh
   docker-compose up -d
   ```

   - The command will download the images in `compose.yaml` first, and then initiate the containers.
   - The `-d` flag ensures that containers are run in the background.

3. **Stopping Containers:**
   To stop the running containers, use the following command.
   ```sh
   docker-compose down
   ```

#### Additional Commands

- **Viewing Logs:**
  To view the logs of the running containers, use the following command.
  ```sh
  docker-compose logs
  ```
- **Listing Running Containers:**

  ```sh
  docker-compose ps
  ```

#### Accessing pgAdmin via Docker Compose

This assumes that Docker containers are running.

1. **Access pgAdmin:**

   - Open your web browser and navigate to `http://localhost:8080`.
   - Log in using the default email (`admin@admin.com`) and password (`admin`).

2. **Add a PostgreSQL Server:**

   - Click on "Servers" then "Register" -> "Server" or navigate to "Object" -> "Register" -> "Server".
   - In the "General" tab, provide a name for your server.
   - In the "Connection" tab, enter the details for your PostgreSQL server, including hostname (`postgres`), port (`5432`), username(`admin`), and password (`admin`). (**Note**: Provided values are based on current `compose.yaml` file.)
   - Click "Save" to add the server.

3. **Connect to the Server:**
   - Once the server is added, you can connect to it by selecting it from the list of servers and clicking "Connect".
   - You can now manage your databases, run SQL queries, and perform other administrative tasks using pgAdmin.

#### Notes

- Refer to the [Docker Compose documentation](https://docs.docker.com/compose/) for more detailed information and advanced usage.
- For more detailed instructions and troubleshooting, refer to the official pgAdmin documentation: [pgAdmin Documentation](https://www.pgadmin.org/docs/).

### API Endpoints

The backend exposes the following API endpoints:

- **GET /**: Returns a "Hello World!" message.

### Environment Variables

TBD

### Testing

TBD

### Linting

TBD

### Deployment

TBD
