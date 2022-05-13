const express = require('express');
const app = express();

app.get('/cat', (req, res) => {
  // send => write +end
  res.send(`
  <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" width="100%">
  `);
});

app.get('/dog', (req, res) => {
  // res.setHeader('Content-Type', 'text/html'); => can be skipped.
  // send does that for us, so we don't need to do that ourself
  res.send(`
  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" width="100%">
  `);
});

app.listen(4001);