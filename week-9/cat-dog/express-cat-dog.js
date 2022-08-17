const express = require('express');
const app = express();

console.log('This is the cat dog example');

app.get('/dinosaur', (req, res) => {
  // send => write +end
  res.send(`
  <img src="https://i.natgeofe.com/n/d4492040-e42e-4c0b-9604-3b1ddea67f88/FInal-Submission_NJG_square.jpg" width="100%">
  `);
});

app.get('/dog', (req, res) => {
  // res.setHeader('Content-Type', 'text/html'); => can be skipped.
  // send does that for us, so we don't need to do that ourself
  res.send(`
  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" width="100%">
  `);
});

app.get('*', (req, res) => {
  res.send('Invalid request made: ' + req.method + " " +  req.path);
});

app.listen(4000);
