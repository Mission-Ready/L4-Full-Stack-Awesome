const express = require('express');
// const { someRouter } = require('./rootPath.js');
const { userRouter } = require('./user.routes.js');

const app = express();

// localhost:4000/ + 'car'
// app.use(someRouter);
// app.use('/', someRouter);

// localhost:4000/users + 'xxx'
app.use('/user', userRouter);

app.listen(4000);
