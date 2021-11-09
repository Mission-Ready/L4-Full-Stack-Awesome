const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

// Global Middleware 1 - executes someCommonTaskToBeExecuted
app.use((req, res, next) => {
  console.log('***Global Middleware 1***');
  console.log(req.method, req.url);
  next();
});

// Global Middleware 2 - executes anotherCommonTaskToBeExecuted
app.use((req, res, next) => {
  console.log('***Global Middleware 2***');
  console.log('called at', new Date().toISOString());
  next();
});

// listen for GET requests on the / path | route, using the get() method.
app.get('/', (req, res) => {
  //someCommonTaskToBeExecuted
  res.send('Hello World!');
});

// Global Middleware 3 - does not get executed !!!
// Needs to be written before any route handling takes place
app.use((req, res, next) => {
  console.log('Global Middleware 3');
  next();
});

const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
