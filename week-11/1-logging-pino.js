const express = require('express');
const app = express();
const pino = require('pino');

app.use(pino({ level: process.env.LOG_LEVEL || 'info', prettyPrint: true })); // added pino library as a logger

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/sebin', (req, res) => {
  res.send('Hello Sebin!');
});

app.listen(4000);
