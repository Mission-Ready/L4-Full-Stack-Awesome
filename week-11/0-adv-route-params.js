const express = require('express');
const app = express();
const userData2 = [
  { name: 'Sebin', age: 25, id: 50 },
  { name: 'John', age: 20, id: 63 },
  { name: 'Jane', age: 125, id: 93 },
  { name: 'Mary', age: 12, id: 102 },
];

// localhost:4000/v3/user/63. Route param :id => 63
app.get('/v3/user/:id', (req, res) => {
  const { id } = req.params;

  // This will be replaced by a MySQL query to get the data from the database
  // `SELECT Name, age FROM users WHERE userID = ${id}` 
  const requestedUser = userData2.find((user) => user.id == id);

  if (requestedUser) {
    res.json({
      name: requestedUser.name,
      age: requestedUser.age,
    });
  } else {
    res.statusCode = 400;
    // send() & json() - both are used to close the requests/sending a response
    // send() - sends response in any format - json, text, html etc
    // json() - sends in the JSON format. 
    res.send('User does not exist');
  }
});

app.listen(4000);
