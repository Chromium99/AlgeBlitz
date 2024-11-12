
## Supabase Auth Setup

This guide outlines the steps to set up Supabase authentication with a Dockerized PostgreSQL database.

### Prerequisites

- Ensure Docker, Docker Desktop, and Docker Compose are installed on your machine.
- Verify Docker is running by executing `docker --version` and `docker-compose --version` in your terminal.
- Make sure to have Docker Desktop open before running these steps.

### Getting Started

To get started with Supabase authentication setup, follow these steps:

1. **Install Supabase CLI**: Download and install the Supabase CLI in your terminal.
   
   ```sh
   # Command to start Supabase
   supabase start
   ```

2. **Export the Auth Schema**: Run this command to export the Supabase auth schema to a SQL file.

   ```sh
   supabase db dump --schema auth > supabase_auth_schema.sql
   ```

### Setting Up Roles

1. **Create Required Roles**: First, connect to your PostgreSQL Docker container:

   ```sh
   docker exec -it postgres psql -U admin -d dev-db
   ```

   Then, create the roles required for Supabase:

   ```sql
   -- Create Supabase roles
   CREATE ROLE supabase_admin WITH SUPERUSER CREATEDB CREATEROLE LOGIN PASSWORD 'your_password';
   CREATE ROLE supabase_auth_admin WITH LOGIN;
   CREATE ROLE anon NOLOGIN;
   CREATE ROLE authenticated NOLOGIN;
   CREATE ROLE service_role NOLOGIN;
   CREATE ROLE dashboard_user NOLOGIN;
   CREATE ROLE postgres WITH LOGIN;

   -- Grant privileges
   GRANT supabase_auth_admin TO postgres;
   GRANT anon TO authenticated;
   ```

   - Use `Ctrl + D` to exit the PostgreSQL shell.

2. **Apply the Auth Schema to PostgreSQL**: Use the `psql` command to apply the exported SQL file to the Dockerized PostgreSQL database:

   ```sh
   docker exec -i postgres psql -U admin -d dev-db < supabase/supabase_auth_schema.sql
   ```

3. **Enable UUID Extension**: Connect to the PostgreSQL container again:

   ```sh
   docker exec -it postgres psql -U admin -d dev-db
   ```

   Then, in the PostgreSQL shell, enable the `uuid-ossp` extension to generate UUIDs:

   ```sql
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
   ```

### Configuration

Add the necessary environment variables to a `.env` file for Supabase authentication:

```plaintext
SUPABASE_JWT_SECRET=jwt_secret
SUPABASE_SERVICE_KEY=service_role_key
SUPABASE_URL=https://supabase-instance-url
```

Update `docker-compose.yml` to include these environment variables in the PostgreSQL service:

```yaml
services:
  postgres:
    image: postgres
    environment:
      POSTGRES_DB: <your_database_name>
      POSTGRES_USER: <your_postgres_user>
      POSTGRES_PASSWORD: <your_postgres_password>
      SUPABASE_JWT_SECRET: ${SUPABASE_JWT_SECRET}
      SUPABASE_SERVICE_KEY: ${SUPABASE_SERVICE_KEY}
      SUPABASE_URL: ${SUPABASE_URL}
    volumes:
      - ./data:/var/lib/postgresql/data
```

### Running Docker Compose

#### Steps to Run Docker Compose

1. **Navigate to the Project Directory**: Change the directory to where your `docker-compose.yml` file is located.

   ```sh
   cd backend
   ```

2. **Build and Start Containers**: Run the following command to build and start the containers.

   ```sh
   docker-compose up -d
   ```

   - The `-d` flag ensures that containers are run in the background.

3. **Stopping Containers**: To stop the running containers, use:

   ```sh
   docker-compose down
   ```

#### Additional Docker Commands

- **Viewing Logs**:

  ```sh
  docker-compose logs
  ```

- **Listing Running Containers**:

  ```sh
  docker-compose ps
  ```

### Accessing pgAdmin via Docker Compose

1. **Access pgAdmin**:

   - Open your browser and go to `http://localhost:8080`.
   - Log in with default credentials (e.g., `admin@admin.com`, password `admin`).

2. **Add a PostgreSQL Server**:

   - Navigate to "Servers" -> "Register" -> "Server".
   - In the "Connection" tab, enter the server details (hostname: `postgres`, port: `5432`, username: `admin`, password: `admin`).

3. **Connect to the Server**: After adding the server, you can manage your databases, run SQL queries, and verify the schema.

### Notes

- Refer to the [Docker Compose documentation](https://docs.docker.com/compose/) for more advanced usage.
- For more detailed instructions, see [pgAdmin Documentation](https://www.pgadmin.org/docs/).

### Environment Variables

TBD

### Testing

TBD

### Linting

TBD

### Deployment

TBD
