import { Router } from "express";
const authRouter = Router();

authRouter.post("/register", async (req, res, next) => {
  try {
    const { fooName, email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("You must provide an email and a password");
    }
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      res.status(404).send({
        message: `The email ${email} is already in use. Please login instead!!!`,
      });
      throw new Error("The email is already in use!");
    }
    const user = await createUserByEmailAndPassword({
      fooName,
      email,
      password,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
    console.error(err);
  }
});

function findUserByEmail(email: string) {
  // TODO : Check and see if the user already exists within database,
  // if so, they cannot register again using the same email
  // not yet implemented
  return true;
}

async function createUserByEmailAndPassword({
  fooName,
  email,
  password,
}: {
  fooName?: string;
  email: string;
  password: string;
}) {
  // do something with database logic here, will define it within another file for otganization
  return true;
}
