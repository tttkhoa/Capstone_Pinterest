const express = require("express");
const userRouter = express.Router();
const {
  signUpUser,
  loginUser,
} = require("../Controllers/userController");

userRouter.post("/sign-up", signUpUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
