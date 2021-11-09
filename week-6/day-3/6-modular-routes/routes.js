const express = require('express');
const router = express.Router();

// Nested paths used automatically
// /cars + /color
router.get('/color', (req, res) => {
  console.log('Route handler for /car/color');
  res.send('The car is blue');
});

// /cars + /make
router.get('/make', (req, res) => {
  console.log('Route handler for /car/make');
  res.send('The car is built by Tesla');
});

module.exports = router;
