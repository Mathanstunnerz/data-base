import express from "express";
import bcrypt from "bcrypt";

import { postuser } from "../service/user.service.js";
const router = express.Router();
async function generateHashedpassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// express.json() -middleware
router.post("/signup", async function (request, response) {
  const { username, password } = request.body;
  const hashedPassword = await generateHashedpassword(password);
  const movies = await postuser({
    username: username,
    password: hashedPassword,
  });

  response.send(movies);
});

export default router;
