const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

// listen for GET requests on the / path/route, using the get() method.
app.get('/green', (req, res) => {
  console.log('Got a GET request to /', new Date().toString());
  res.send('Hello World!');
});

app.post('/red', (req, res) => {
  console.log("You've got RED via POST", new Date().toString());
  res.send(`You've got RED via POST`);
});

app.listen(4000);
