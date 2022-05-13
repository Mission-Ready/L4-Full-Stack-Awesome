const express = require('express');
const userRouter = express.Router();

// USER APIs
// localhost:4000/user + '/login'
// localhost:4000/user/login
userRouter.post('/login', (req, res) => {
  const { username } = req.body;
  res.send('Logging in user ' + username);
});

// localhost:4000/user + '/logout'
userRouter.get('/logout', (req, res) => {
  res.send('logging out user');
});

// localhost:4000/user + '/checkout'
userRouter.get('/checkout', (req, res) => {
  res.send('User has checked out');
});

module.exports = {
  userRouter,
};
