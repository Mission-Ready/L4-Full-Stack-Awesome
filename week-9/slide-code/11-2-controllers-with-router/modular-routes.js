const express = require('express');
const carRouter = express.Router();
const cars = require('./controllers');

// Nested paths used automatically
// localhost:4000/car/
carRouter.get('/', cars.handleCars);

// localhost:4000/cars/color
// /cars + /color
carRouter.get('/color', cars.handleColor);

// localhost:4000/cars/make
// /cars + /make
carRouter.get('/make', (req, res) => {
  console.log('Route handler for /car/make');
  res.send('The car is built by Tesla');
});

module.exports = { carRouter };
