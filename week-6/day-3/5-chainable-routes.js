const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

// Chain-able route handlers
// Route path is specified once in a single location
app
  .route('/car')
  .get((req, res) => {
    res.send('Get a car!');
  })
  .post((req, res) => {
    res.send('Sell a car!');
  })
  .delete((req, res) => {
    res.send('Destroy a car!');
  });

/*
app.get('/car', (req, res) => {
  res.send('Buy a car!');
});

app.post('/car', (req, res) => {
  res.send('Sent a  car!');
});

app.delete('/car', (req, res) => {
  res.send('Delete the cars!');
});
*/

const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
