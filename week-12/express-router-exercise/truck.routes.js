const express = require('express');
const truckRouter = express.Router();

// TRUCK APIs
truckRouter.get('/', (req, res) => {
  res.send('getting all truck');
});

truckRouter.get('/:truckModel', (req, res) => {
  const { truckModel } = req.params;
  res.send(`getting ${truckModel} truck`);
});

truckRouter.post('/', (req, res) => {
  res.send('adding a truck');
});

truckRouter.delete('/', (req, res) => {
  res.send('deleting a truck');
});

module.exports = {
  truckRouter,
};
