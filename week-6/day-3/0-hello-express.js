const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

// listen for GET requests on the / path | route, using the get() method.
app.get('/', (req, res) => res.send('Hello World!'));

const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
