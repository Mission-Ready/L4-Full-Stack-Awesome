const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

// Global Middleware 1 - executes someCommonTaskToBeExecuted
app.use((req, res, next) => {
  console.log(req.method, req.url, 'called at', new Date().toISOString());
  next();
});

// listen for GET requests on the / path | route, using the get() method.
app.get('/', (req, res) => {
  //someCommonTaskToBeExecuted
  res.send('Hello World!');
});

app.get('/user', (req, res) => {
  //someCommonTaskToBeExecuted
  res.send('Hello User!');
});

app.get('/car', (req, res) => {
  //someCommonTaskToBeExecuted
  res.send('Hello car!');
});

const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
