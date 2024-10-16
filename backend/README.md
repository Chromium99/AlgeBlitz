## Backend

The `backend` subfolder contains the server-side code for the AlgeBlitz project. This includes the Express server setup, middleware configuration, and API endpoints.

### Structure

backend/
├── .gitignore
├── package.json
├── tsconfig.json
├── nodemon.json
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
- **`nodemon.json`**: Nodemon configuration file.

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
