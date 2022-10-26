const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

let connection;
const connectDB = async () => {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'developer',
    password: 'abcdefghijkl`12',
    database: 'world',
  });
};
connectDB();

// Using async await on promises
app.get('/', async (req, res) => {
  console.log('Received a GET request to /');
  try {
    const [rows] = await connection.execute(`SELECT * FROM WORLD.CITY LIMIT 2;`);
    console.log(rows, new Date().toISOString());
    res.send(rows);
  } catch (error) {
    console.log('Error', error);
    res.send("You' got an error ! " + error.code);
  }
});

// Just using promises
app.get('/promise', async (req, res) => {
  console.log('Received a GET request to /');

  connection
    .query(`SELECT * FROM WORLD.CITY LIMIT 2;`)
    .then(([rows]) => {
      console.log(rows, new Date().toISOString());
      res.send(rows);
    })
    // .then(() => {
    //   connection.query(`SELECT * FROM WORLD.CITY LIMIT 2;`).then(([rows]) => {
    //     console.log(rows);
    //   });
    // })
    .catch((error) => {
      console.log('Error', error);
      res.send("You' got an error ! " + error.code);
    });
});

console.log('Server running at port', 4000);
app.listen(4000);
