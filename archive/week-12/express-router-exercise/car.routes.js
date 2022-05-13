const express = require('express');
const carRouter = express.Router();

// CAR APIs
// localhost:4000/car + '/'
carRouter.get('/', (req, res) => {
  res.send('getting all car');
});

// localhost:4000/car + '/:carModel'
carRouter.get('/:carModel', (req, res) => {
  const { carModel } = req.params;
  res.send(`getting ${carModel} car`);
});

// localhost:4000/car + '/'
carRouter.post('/', (req, res) => {
  res.send('adding a car');
});
// localhost:4000/car + '/'
carRouter.delete('/', (req, res) => {
  res.send('deleting a car');
});

module.exports = {
  carRouter,
};
