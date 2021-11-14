const express = require('express');
const dotenv = require('dotenv').config();
const mysql = require('mysql')

const app = express();

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE
})

app.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        res.send(result);
    })
})

app.listen(4000)