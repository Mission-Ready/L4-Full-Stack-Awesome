const express = require('express');
// create a server
const app = express();

app.all('/', (req, res) => {
  res.send('Hello from the node.js server. You have visited /.');
});

app.all('/car', (req, res) => {
  res.send('You have visited the first /car');
});

app.all('*', (req, res) => {
  res.send('You have visited an invalid route');
});

// Start the server. listen to requests
app.listen(4000);
