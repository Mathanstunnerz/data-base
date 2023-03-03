import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import {auth} from "../middleware/auth.js"

import {
  postuser,
  getusersName,
  loginusersName,
} from "../service/user.service.js";
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
  const userFromDm = await getusersName(username);
  if (userFromDm) {
    response.status(400).send({ message: "username already exists" });
  } else if (password.length < 8) {
    response
      .status(400)
      .send({ message: "password must be at least 8 characters" });
  } else {
    const hashedPassword = await generateHashedpassword(password);
    const movies = await postuser({
      username: username,
      password: hashedPassword,
    });

    response.send(movies);
  }
});
router.post("/login", async function (request, response) {
  const { username, password } = request.body;
  const userFromDm = await loginusersName(username);
  // console.log(userFromDm)
  // response.send(userFromDm);
  if (!userFromDm) {
    response.status(400).send({ message: "invalid credentials" });
  } else {
    const storedPassword = userFromDm.password;
    const isPasswordCheck = await bcrypt.compare(password, storedPassword);
    // console.log(isPasswordCheck);
    if (isPasswordCheck) {
       const token = jwt.sign({id:userFromDm._id},process.env.SECRET_KEY);
      // console.log("token: " + token);
       response.send({ message: "Successful login",token: token });
    
    } else {
      response.status(400).send({ message: "invalid credentials" });
    }
    // const hashedPassword = await generateHashedpassword(password);
    // const movies = await postuser({
    //   username: username,
    //   password: hashedPassword,
    // });
  }
});

export default router;
