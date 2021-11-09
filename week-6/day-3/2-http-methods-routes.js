const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

/**
 *  app.METHOD(PATH, HANDLER)
 *      handler - a function which is executed when the PATH/METHOD combo is called
 *          - Contain the normal HTTP request and response from HTTP module in node
 *          - handlerFn(request, response), preferably an arrow function.
 *  */
app.get('/users', (req, res) => {
  console.log('Got a good GET request to /users');
  res.statusCode = 200;
  res.end('<h1 style="color:red">Here are some users !</h1>');
});

app.get('/cars', (req, res) => {
  console.log('Got a good GET request to /cars');
  res.statusCode = 200;
  res.end(`
  <h1 style="color:red">Heres a car for you 
  <img src="https://toy-content.imgix.net/product/siku-1598nz-police-car-2~1581385230.jpg?w=310&h=310&fit=fill&fm=jpg&bg=0FFF&s=6728508bd0df5747d04dd52d31df61cb">
  </h1>
  `);
});

app.get('/', (req, res) => {
  console.log('Got a bad request');
  res.statusCode = 400;
  res.end();
});

app.listen(3000, () => console.log('Server ready'));
