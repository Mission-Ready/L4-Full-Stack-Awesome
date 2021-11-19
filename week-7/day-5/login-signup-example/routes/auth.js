const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt');
const db = require('../db.js');

router.post('/signup', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const hashedPass = bcrypt.hashSync(password, 10)

    db.query('INSERT INTO users SET ?', {email: email, password: hashedPass}, (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log(result)
            res.sendStatus(200)
        }
    })
})

router.post('/login', (req, res) => {
    const email = req.body.email
    const plainTextPassword = req.body.password

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (result.length === 0) return res.send(404)

        const isPasswordCorrect = bcrypt.compareSync(plainTextPassword, result[0].password)

        if (isPasswordCorrect) {
            res.sendStatus(200)
        } else {
            res.sendStatus(401)
        }
    })
})

module.exports = router;