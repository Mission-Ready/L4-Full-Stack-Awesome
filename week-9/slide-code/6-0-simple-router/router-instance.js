const express = require('express');
const plainRouter = express.Router();

plainRouter.get('/', (req, res) => res.send('Hello / GET'));

plainRouter.post('/', (req, res) => res.send('Hello / POST'));

module.exports = {
  plainRouter,
};
