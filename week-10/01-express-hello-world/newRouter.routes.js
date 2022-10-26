const express = require('express');
// 1. create a router
const extraRouter = express.Router();

extraRouter.get('/cars?', (req, res) => {
  res.send("You wanted some car. Here's a car for you 🚗");
});

// 2. Use it to add or APIS
extraRouter.get('/color/:colorName', (req, res) => {
  const colorName = req.params.colorName;
  console.log(colorName);
  res.send(`You wanted ${colorName}`);
});

// 2. Use it to add or APIs
// localhost:4000/user/sebinss/books/redbook
extraRouter.get('/user/:userID/books/:bookID', (req, res) => {
  const { userID, bookID } = req.params;
  res.send(`${userID} wanted the ${bookID}`);
});

module.exports = {
  extraRouter,
};
