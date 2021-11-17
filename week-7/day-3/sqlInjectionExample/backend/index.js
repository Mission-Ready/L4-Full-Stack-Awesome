const express = require('express');
const dotenv = require('dotenv').config();
const mysql = require('mysql')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE
})

db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected successfully...')
    }
})

app.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        res.send(result);
    })
})

app.post('/login', (req, res) => {
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [req.body.email, req.body.password] , (err, result) => {
        if (result.length > 0) {
            return res.status(200).send(result)
        }
        return res.status(404).send(result)
    })
})

//" OR "1=1

app.listen(4000)