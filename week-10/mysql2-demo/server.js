const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'world',
  user: process.env.USER,
  password: process.env.PASSWORD,
});

app.get('/', (req, res) => {
  console.log('Received a GET request to /');

  // Run the SQL query, when you get a request to /
  connection.query(`SELECT * FROM WORLD.CITY LIMIT 5;`, (error, result) => {
    if (error) {
      console.log('Error', error);
      res.send("You' got an error ! " + error.code);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get('/city/:cityName', (req, res) => {
  console.log('Received a GET request to /city');
  const { cityName } = req.params;
  console.log(`SELECT * FROM WORLD.CITY WHERE name='${cityName}'`);

  // Run the SQL query, when you get a request to /city/someCityName
  // SELECT * FROM WORLD.CITY WHERE name='Kabul'
  connection.query(
    `SELECT * FROM WORLD.CITY WHERE name='${cityName}'`,
    (error, result) => {
      if (error) {
        console.log('Error', error);
        res.send("You' got an error ! " + error.code);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

const PORT = process.env.PORT;
console.log('Server running at port', PORT);
app.listen(PORT);
