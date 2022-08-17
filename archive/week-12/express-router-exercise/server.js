const express = require('express');
const morgan = require('morgan');

const { carRouter } = require('./car.routes');
const { boatRouter } = require('./boat.routes');
const { userRouter } = require('./user.routes');
const { truckRouter } = require('./truck.routes');

const app = express();
app.use(express.json());

app.use(morgan('common'));

// Adds the car routes to app
app.use('/car', carRouter);

// Adds the boat routes to app
// Prefixes a '/boat' to all APIs under the boatRouter
app.use('/boat', boatRouter);

// Adds the user routes to app
// Prefixes a '/user' to all APIs under the userRouter
app.use('/user', userRouter);

// Adds the truck routes to app
// Prefixes a '/truck' to all APIs under the truckRouter
app.use('/truck', truckRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log('Server started at port ' + PORT);
});
