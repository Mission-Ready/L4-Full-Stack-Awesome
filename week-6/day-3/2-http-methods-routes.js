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
  <img src="https://media.autoexpress.co.uk/image/private/s--QCKL5ddu--/f_auto,t_content-image-full-mobile@1/v1562245581/autoexpress/2017/12/11_ferrari_288_gto_0.jpg">
  </h1>
  `);
});

app.get('/', (req, res) => {
  console.log('Got a bad request');
  res.statusCode = 400;
  res.end();
});

app.listen(4000, () => console.log('Server ready'));
