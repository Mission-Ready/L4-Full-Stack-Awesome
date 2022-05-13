/**
 *
 * Ways to grab information from the client/user
 *
 * 1. Route parameters
 *    localhost:3000/user/5/blue . /user/:userID/:favColor
 *    const { userID, favColor } = req.params
 *
 * 2. Query Parameters
 *    localhost:3000/teacher?id=52&name=sebin
 *    Everything after the ? is the Query params.
 *    Use '&' to separate two different values
 *    id=52
 *    name=sebin
 *    const {name, id} = req.query;    
 * 
 *  3. Body Params
 *    More secure way to transmit sensitive info.
 *    app.use(express.json()); Needs extra processing
 *    const { name } = req.body;
 * 
 *   Read more = https://stackoverflow.com/questions/30967822/when-do-i-use-path-params-vs-query-params-in-a-restful-api
 */

const express = require('express');
const app = express();

// localhost:5000/
app.get('/', (req, res) => {
  console.log('Received a GET request to /');
  res.send('Received a GET request to /');
});

// Route Parameters - localhost:5000/city/Auckland
app.get('/city/:cityName', (req, res) => {
  console.log('Received a GET request to /city');
  const { cityName } = req.params;
  res.send(`You have asked something about ${cityName}`);
});

// Query Parameters - localhost:5000/student
// localhost:5000/student?name=sebin&color=blue
app.get('/student', (req, res) => {
  console.log('Received a GET request to /student');
  console.log('Got a bunch of query params', req.query);
  // const { name, color } = req.query;
  res.send(
    `You have asked something about student ${JSON.stringify(req.query)}`
  );
});

/*
   Path params - identify a resource.
        /customer/sebin -> needs to refer to a resource ie, like /customer/sebin
        /car/:id
   Query params - sort/filter the resource.
        /customer/sebin?transactions_from=monday => asking a specific info from the resource
        /car?color=blue
*/ 
const PORT = 5000;
console.log('Server running at port', PORT);
app.listen(PORT);
