const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'developer',
  password: '',
  database: `learn_sql`,
});

module.exports = pool;
