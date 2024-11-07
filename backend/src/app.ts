import express, { Express, Request, Response } from "express";
import cors, { CorsOptions } from "cors";

const app: Express = express();

/**
 * @convention use Cors for making calls via server side
 * @convention use node fetch for making calls between client and server
 */
const corsOptions: CorsOptions = {
  origin: "*", // Allow all origins
};

app.use(cors(corsOptions));

const port: Number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
