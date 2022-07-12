const express = require('express');
const bcrypt = require('bcrypt');

const connection = require('./db');

const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  //  Call an INSERT query into the DB
  /**
      CREATE TABLE `users` (
        `id` 			int 		 PRIMARY KEY AUTO_INCREMENT,
        `emailId`     varchar(255) NOT NULL UNIQUE,
        `password`    varchar(255)  NOT NULL 
      );
  */
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    connection.query(
      `INSERT INTO learn_sql.users (emailId, password) VALUES (? , ?)`,
      [email, hashedPassword]
    );
    res.send(`Created a new User`);
  } catch (error) {
    console.log(error);
    res.send(`Error ${JSON.stringify(error)}`);
  }
});

module.exports = {
  userRouter,
};
