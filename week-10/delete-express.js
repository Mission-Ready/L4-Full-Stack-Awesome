const express = require('express');
// create a server
const app = express();

app.delete('/', (req, res) => {
  res.send('Hello World');
});

app.listen(4000);