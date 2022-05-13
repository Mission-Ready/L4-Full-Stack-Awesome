const express = require('express');
const carRouter = express.Router();

// Nested paths used automatically
// /cars + /color
carRouter.get('/color', (req, res) => {
  console.log('Route handler for /car/color');
  res.send('The car is blue');
});

// /cars + /make
carRouter.get('/make', (req, res) => {
  console.log('Route handler for /car/make');
  res.send('The car is built by Tesla');
});

module.exports = carRouter;
