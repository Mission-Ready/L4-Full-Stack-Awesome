const express = require('express');
const cars = require('./modular-routes.js');

// Instantiate an application by calling the express() method
const app = express();

// I - Simple routing - get
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// II - Chaining - route method
// app
// app.route('/car')
//   .get((req, res) => {
//     res.send('Get a car!');
//   })
//   .post((req, res) => {
//     res.send('Sell a car!');
//   });

// An example for a global middleware - to be place before any route handlers
// app.use((req, res, next) => {
//   console.log('Global Middleware 3');
//   next();
// });

// * Router module is used here as a middleware.
app.use('/car', cars);

const hostname = '127.0.0.1';
const port = 4000;
app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
