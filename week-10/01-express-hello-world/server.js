const express = require('express');
const mysql = require('mysql2');
const { extraRouter } = require('./newRouter.routes');

const app = express();

// 1. Creating a connection to the DB server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'developer',
  password: 'hellomysql',
  database: 'world',
});

// Whenever an api call is received, we 2. run the query using
// connection.query -> SQL Query & an arrow fn
app.get('/', (req, res) => {
  connection.query('SELECT * FROM world.city LIMIT 5;', (err, result) => {
    res.send(result);
  });
});

app.get('/city', (req, res) => {
  connection.query(
    `SELECT Name FROM world.city where name like 'A%' LIMIT 5;`,
    (err, resultArray) => {
      const cityList = resultArray.map((city) => city.Name);
      res.send(cityList);
    }
  );
});

// 3. Attach the router the app service. 
app.use('/', extraRouter);

app.listen(4000);
