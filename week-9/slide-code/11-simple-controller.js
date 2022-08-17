const express = require('express');
const { routeHandler } = require('./11-hello.controller')

const app = express();

app.get('/', routeHandler);

app.listen(4000);
console.log('server running @ 4000');
