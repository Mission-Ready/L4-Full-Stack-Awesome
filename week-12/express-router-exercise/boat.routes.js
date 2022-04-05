const express = require('express');
const boatRouter = express.Router();

// BOAT APIs
boatRouter.get('/', (req, res) => {
  res.send('getting all boat');
});

boatRouter.get('/:boatModel', (req, res) => {
  const { boatModel } = req.params;
  res.send(`getting ${boatModel} boat`);
});

boatRouter.post('/', (req, res) => {
  res.send('adding a boat');
});

boatRouter.delete('/', (req, res) => {
  res.send('deleting a boat');
});

module.exports = {
  boatRouter
}