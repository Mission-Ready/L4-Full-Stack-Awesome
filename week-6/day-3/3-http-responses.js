const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

// listen for GET requests on the /users, using the get() method.
app.get('/user', (req, res) => {
  // Accepts an object or array, and converts it to JSON before sending it
  res.json({ firstName: 'Sebin', lastName: 'Benjamin' });
});

app.get('/user/string', (req, res) => {
  // Send sends a simple string as the response and close the connection
  //  - Sets Content-Type header to text/html if you pass in a normal string
  //  - Sets the Content-length response header
  res.send('This is a string !');
});

// here res.send works equivalent to res.json
app.get('/user/sendString', (req, res) => {
  // Send sends a simple string as the response and close the connection
  //  - Sets Content-Type header to application/json if you pass in an object/array.
  //  - Sets the Content-length response header
  res.send({ firstName: 'Sebin', lastName: 'Benjamin' });
});

app.get('/user/empty', (req, res) => {
  // send an empty response, without any body
  // Body not expected + no parameters required.
  res.end();
});

app.listen(3000, () => console.log('Server ready'));
