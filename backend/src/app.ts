import express, { Express, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
const app: Express = express();

/**
 * @convention use Cors for making calls via server side
 * @convention use node fetch for making calls between client and server
 * @convention we can use routers for defining API routes and can easily be connected with the primary app router : for organization purposes
 */

const router = express.Router();
const corsOptions: CorsOptions = {
  origin: "*", // Allow all origins
};

// NOTE : not entirely sure if having to specify cors and express.json for both app and router is redundant or not
router.use(cors(corsOptions));
app.use(cors(corsOptions));

// if this isn't specified, router defined routes won't work
app.use(express.json());
router.use(express.json());
app.use(router);

// TODO : Imeplement a function to generate this randomly based on the port number and save it so it can be used throughout
// better security convention
const port: Number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
