const express = require('express');
const app = express();

/*
 Route/Path Parameters - Named parts of the path URl that can be used to capture values
 Value of the route parameter is store in the string specified after the ':'.
 Eg, In '/user/:id', whatever comes after /user is stored in the key 'id' in the req.params.id
         /user/123 => req.params.id is then equal to '123' 
 Values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
*/

// Route Parameters - localhost:5000/city/Auckland
app.get('/city/:cityName', (req, res) => {
  console.log('Received a GET request to /city');
  const { cityName } = req.params;
  res.send(`You have asked something about ${cityName}`);
});


const userData = [
  { name: 'Sebin', age: 25 },
  { name: 'John', age: 20 },
  { name: 'Jane', age: 125 },
  { name: 'Mary', age: 12 },
];

// /user/0 => { name: 'Sebin', age: 25 },
// /user/1 => { name: 'John', age: 20 },
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    name: userData[id].name,
    age: userData[id].age,
  });
});

const userData2 = [
  { name: 'Sebin', age: 25, id: 50 },
  { name: 'John', age: 20, id: 63 },
  { name: 'Jane', age: 125, id: 93 },
  { name: 'Mary', age: 12, id: 102 },
];

// /user/0 => { name: 'Sebin', age: 25 },
// /user/1 => { name: 'John', age: 20 },
app.get('/v2/user/:id', (req, res) => {
  const { id } = req.params;
  if (id >= 4) {
    res.statusCode = 400;
    res.send('User does not exist');
  }
  res.json({
    name: userData2[id].name,
    age: userData2[id].age,
  });
});

// /user/0 => { name: 'Sebin', age: 25 },
// /user/1 => { name: 'John', age: 20 },
app.get('/v3/user/:id', (req, res) => {
  const { id } = req.params;
  const requestedUser = userData2.find((user) => user.id == id);
  if (requestedUser) {
    res.json({
      name: requestedUser.name,
      age: requestedUser.age,
    });
  } else {
    res.statusCode = 400;
    res.send('User does not exist');
  }
});

// http://localhost:4000/user/{19}/project
app.get('/user/:id/project', (req, res) => {
  // const { id } = req.params;
  const id = req.params.id;
  res.json({
    user: {
      firstname: 'Sebin',
      lastname: 'Benjamin',
    },
    email: 'sebin@missionx.com',
    phone: 1234569,
    userID: id,
  });
});

//
// Values in the req params/path parameter are string values
app.get('/user/:id/project/:projectID', (req, res) => {
  console.log('Request Params object', req.params);
  // Refer Object destructuring syntax
  // const { id, projectID } = req.params;
  const id = req.params.id;
  const projectID = req.params.projectID;

  res.json({
    user: {
      firstName: 'Sebin',
      lastName: 'Benjamin',
    },
    email: 'sebin@missionx.com',
    phone: 1234569,
    userID: parseInt(id, 10),
    projectID,
  });
});

app.listen(4000, () => console.log('Server ready'));
