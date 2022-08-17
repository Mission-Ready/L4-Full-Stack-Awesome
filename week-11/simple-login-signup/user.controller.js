const bcrypt = require('bcrypt');
const pool = require('./db');

const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).send('Missing parameter: email');
  }
  if (!password) {
    return res.status(400).send('Missing parameter: password');
  }

  /**
   CREATE TABLE `users` (
     `id` 			int 		 PRIMARY KEY AUTO_INCREMENT,
     `emailId`     varchar(255) NOT NULL UNIQUE,
     `password`    varchar(255)  NOT NULL 
   );
  */
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const connection = await pool.getConnection();
    //  Call an INSERT query into the DB
    await connection.query(
      `INSERT INTO learn_sql.users (emailId, password) VALUES (? , ?)`,
      [email, hashedPassword]
    );
    res.send(`Created a new User with the email: ${email}.`);
  } catch (error) {
    res.status(400).send(`Error creating the user. ${JSON.stringify(error?.message)}`);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).send('Missing parameter: email');
  }
  if (!password) {
    return res.status(400).send('Missing parameter: password');
  }

  try {
    const connection = await pool.getConnection();
    //  Call an SELECT query into the DB
    const [row] = await connection.query(
      `SELECT password from learn_sql.users WHERE emailId = ?;`,
      [email]
    );

    // If there is no user with the email id provided
    if (row.length === 0) {
      return res.status(400).send('Cannot find a user with the given email');
    }

    const { password: realPassword } = row[0]; // realPassword contains the one from the DB
    // checking password from the API call with the one from the DB
    const isCorrectPassword = bcrypt.compareSync(password, realPassword); 

    const responseMessage = isCorrectPassword
      ? 'Login successful'
      : 'Login failed. Please check your password';
    const responseStatus = isCorrectPassword ? 200 : 401;

    res.status(responseStatus).send(responseMessage);
  } catch (error) {
    res.send(`Error logging in the user. ${JSON.stringify(error?.message)}`);
  }
};

module.exports = {
  signUpUser,
  loginUser,
};
