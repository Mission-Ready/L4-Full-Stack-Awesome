const express = require('express');
const app = express();

/**
 *  Query Parameters
 *  ================
 *  * Everything after the ? is the Query params.
 *  * Use '&' to separate two different values
 *  * Used to sort/filter out the resources.
 *  * /customer/sebin?transactions_from=monday    => asking a specific info from the resource
 *  * /car?color=blue
 *  * https://pokeapi.co/api/v2/pokemon?offset=4&limit=3
 *        - offset => 4
 *        - limit => 3
 * localhost:3000/teacher?id=52&name=sebin
 *    id=52
 *    name=sebin
 *  const {name, id} = req.query;    
 * 
 */

// Query Parameters - localhost:5000/student
// localhost:5000/student?name=sebin&color=blue
app.get('/student', (req, res) => {
  console.log('Received a GET request to /student');
  console.log('Got a bunch of query params', req.query);
  res.send(
    `You have asked something about student ${JSON.stringify(req.query)}`
  );
});

app.listen(4000, () => console.log('Server ready'));
