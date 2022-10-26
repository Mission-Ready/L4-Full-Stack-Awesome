const express = require('express');
const app = express();

// Global Middleware 1 - executes someCommonTaskToBeExecuted
app.use((req, res, next) => {
  console.log('***Global Middleware 1***', req.method, req.url);
  next();
});

// Global Middleware 2 - executes anotherCommonTaskToBeExecuted
app.use((req, res, next) => {
  console.log('***Global Middleware 2***', 'called at', new Date().toUTCString());
  next();
});

// listen for GET requests on the / path/route, using the get() method.
app.get('/', (req, res) => {
  console.log('Hello World');
  res.send('Hello World!');
});

app.get('/user', (req, res) => {
  res.send('Hello User!');
});

app.get('/user/abcd', (req, res) => {
  res.send('Hello abcd!');
});

app.get('/car', (req, res) => {
  res.send('Hello car!');
});

// Global Middleware 3 - does NOT get executed !!!
// Needs to be written before any route handling takes place
app.use((req, res, next) => {
  console.log('Global Middleware 3');
  next();
});

const port = 4000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
