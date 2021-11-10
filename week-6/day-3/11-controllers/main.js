const express = require('express');
const cars = require('./modular-routes.js');

// Instantiate an application by calling the express() method
const app = express();

// * Router module is used here as a middleware.
app.use('/car', cars);

const hostname = '127.0.0.1';
const port = 4000;
app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
