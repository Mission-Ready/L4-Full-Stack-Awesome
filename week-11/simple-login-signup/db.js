const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'developer',
  password: '',
  database: `learn_sql`,
});

module.exports = connection;
