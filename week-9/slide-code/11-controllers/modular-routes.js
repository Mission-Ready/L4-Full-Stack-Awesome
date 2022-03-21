const express = require('express');
const router = express.Router();
const cars = require('./controllers');

// Nested paths used automatically
router.get('/', cars.handleCars);

// /cars + /color
router.get('/color', cars.handleColor);

// /cars + /make
router.get('/make', (req, res) => {
  console.log('Route handler for /car/make');
  res.send('The car is built by Tesla');
});

module.exports = router;
