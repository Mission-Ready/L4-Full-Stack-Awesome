const express = require('express');
const someRouter = express.Router();

someRouter.get('/', (req, res) => {
  console.log('GET called');
  res.send('Hello GET !');
});

someRouter.post('/', (req, res) => {
  console.log('POST called');
  res.send('Hello POST !');
});

someRouter.put('/', (req, res) => {
  console.log('PUT called');
  res.send('Hello PUT !');
});

someRouter.delete('/', (req, res) => {
  console.log('DELETE called');
  res.send('Hello DELETE !');
});

someRouter.patch('/', (req, res) => {
  console.log('PATCH called');
  res.send('Hello PATCH ! Today is great!');
});

module.exports = {
  someRouter,
};
