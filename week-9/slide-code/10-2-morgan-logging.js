const express = require('express');
const morgan = require('morgan');

const app = express();
// app.use(morgan('common'));
// app.use(morgan('tiny'));
app.use(morgan('dev'));
// app.use(morgan('common'));

app.get('/hello', (req, res) => {
  res.send('World');
});

app.get('/world', (req, res) => {
  res.send('hello');
});

app.listen(4000);