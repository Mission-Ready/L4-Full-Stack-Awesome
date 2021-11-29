const express = require('express');
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.query('SELECT * FROM students', (err, result) => {
    if (err) throw err

    res.send(result)
  })
})

module.exports = router