const express = require('express');

// create a server
const app = express();

app.delete('/', (req, res) => {
  res.send('Hello World');
});

console.log('Server listening at http://localhost:4000');
app.listen(4000);
