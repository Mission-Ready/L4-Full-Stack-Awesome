const express = require('express');
const app = express();

const { plainRouter } = require('./router-instance');

app.use(plainRouter);

app.listen(4000);
