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


app.get('/getTransactions', (req, res) => {
    db.query('SELECT *FROM transactions WHERE transaction_id <=10;', (err, result) => {
        res.send(result);
    })
})

app.get('/transactions/:user', (req, res) => {
    db.query('SELECT * FROM transactions WHERE user_id = ?', [req.params.user], (err, result) => {
        res.send(result);
    })
})

app.post('/addUser', (req, res) => {
    db.query('INSERT INTO users SET ?', {email: req.body.email, password: req.body.password}, (err, result) => {
        res.send(result);
    })
})

app.delete('/deleteUser/:userID', (req, res) => {
    db.query('DELETE FROM users WHERE ?', {id: req.params.userID}, (err, result) => {
        res.send(result);
    })
})

app.listen(4000)