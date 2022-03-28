const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json()); // Middleware added to process the json body params

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

/**
 * Create two endpoints 
    localhost:5000/addUser (post)
    localhost:5000/deleteUser/:userID (delete)
    The addUser endpoint needs to accept a post request that contains an object with the email and password properties of the user we are trying to add. 

    CREATE TABLE User (
      ID 			  INT 			PRIMARY KEY AUTO_INCREMENT,
      Email 		VARCHAR(255)	NOT NULL unique, 
      Password 	VARCHAR(255) 	NOT NULL
    );
*/

app.post('/addUser', (req, res) => {
  console.log('Received a POST request to /addUser');
  
  const { email, password } = req.body;
  console.log(email, password);

  // Run the SQL query, when you get a request to /
  connection.query(
    `INSERT INTO user
    (Email,
     Password)
    VALUES
    ('${email}', '${password}');
  `,
    (error, result) => {
      if (error) {
        console.log('Error', error);
        res.send("You' got an error ! " + error.code);
      } else {
        console.log(result);
        res.send('User created successfully');
      }
    }
  );
});

const PORT = process.env.EXPRESS_PORT;
console.log('Server running at port', PORT);
app.listen(PORT);
