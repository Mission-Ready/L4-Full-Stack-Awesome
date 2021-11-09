const express = require('express');
const app = express();

// Route/Path Parameters - Named parts of the path URl that can be used to capture values
// Values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
// http://localhost:3000/user/{19}/project
app.get('/user/:id/project', (req, res) => {
  const { id } = req.params;
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

// http://localhost:3000/user/{19}/project/{56}
// Values in the req params/path parameter are string values
app.get('/user/:id/project/:projectID', (req, res) => {
  console.log('Request Params object', req.params);
  // Refer Object destructuring syntax
  const { id, projectID } = req.params;
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

app.listen(3000, () => console.log('Server ready'));
