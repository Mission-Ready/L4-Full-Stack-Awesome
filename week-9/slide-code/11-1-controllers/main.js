const express = require('express');
const { carRouter } = require('./modular-routes');

// Instantiate an application by calling the express() method
const app = express();

// * Router module is used here as a middleware.
// '/car' - is the prefix for all routes in this router
app.use('/car', carRouter);

app.listen(port);
