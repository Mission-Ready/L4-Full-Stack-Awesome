const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

app.get('/user/html', (req, res) => {
  // Changes the content type headers by using Response.set() method
  // Takes a header field (eg, content-type) and a value (eg - text/html)
  res.set('Content-Type', 'text/html');
  res.end('Hello World');
});

// type(...) is a shortcut to set the content-type of the response message
app.get('/user/type/html', (req, res) => {
  res.type('.html'); // or res.type('html')
  res.end('Hello World');
});

app.get('/user/type/json', (req, res) => {
  // Equivalent to setting manually as JSON, ie
  // res.set('Content-Type', 'application/json');
  res.type('json'); // or res.type('html')
  res.end('Hello World');
});

app.listen(4000, () => console.log('Server ready'));
