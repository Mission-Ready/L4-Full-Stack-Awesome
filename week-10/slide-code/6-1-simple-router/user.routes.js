const express = require('express');
const userRouter = express.Router();

// /user + /read
userRouter.get('/read', (req, res) => {
  console.log('GET called on user router');
  res.send('Hello GET !on user router');
});

// /user + /add => localhost:4000/user/add
userRouter.post('/add', (req, res) => {
  console.log('POST called on user router');
  res.send('Hello POST !on user router');
});

// /user + /
userRouter.put('/', (req, res) => {
  console.log('PUT cclalled on user router');
  res.send('Hello PUT !on user router');
});

userRouter.delete('/', (req, res) => {
  console.log('DELETE called on user router');
  res.send('Hello DELETE !on user router');
});

userRouter.patch('/', (req, res) => {
  console.log('PATCH called on user router');
  res.send('Hello PATCH ! Today is great!on user router');
});

module.exports = {
  userRouter,
};
