const express = require('express');
const { signUpUser, loginUser } = require('./user.controller');

const userRouter = express.Router();

userRouter.post('/signup', signUpUser);
userRouter.post('/login', loginUser);

module.exports = {
  userRouter,
};
