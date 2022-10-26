const express = require('express');
// Instantiate an application by calling the express() method
const app = express();

// Global Middleware 1 - executes someCommonTaskToBeExecuted
// req, res, next() - 3 parameters in the middleware function
app.use((req, res, next) => {
// same as app.use('/', (req, res, next) => {
  console.log(req.method, req.url, 'called at', new Date().toLocaleTimeString());
  next();
});

// listen for GET requests on the / path | route, using the get() method.
app.get('/', (req, res) => {
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

const port = 4000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
