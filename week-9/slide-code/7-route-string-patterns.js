const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

/**
 * /cats? => /cat works and /cats also work
 * ? => 's' becomes an optional character in the path
 */
app.get('/cats?', (req, res) => {
  res.send(`
  <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" width="100%">
  `);
});

/**
 * /dog* => /dog works and /doggg and /dogggggggg etc also work
 * * => g can be repeated any no of times and still the path would match.
 */
app.get('/dog*', (req, res) => {
  res.send(`
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" width="100%">
    `);
});

app.listen(4000);
