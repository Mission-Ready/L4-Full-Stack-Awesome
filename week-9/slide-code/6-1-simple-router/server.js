const express = require('express');
const { someRouter } = require('./rootPath.js');
const { userRouter } = require('./user.routes.js');

const app = express();

app.use('/', someRouter);
app.use('/user', userRouter);

app.listen(4000);
