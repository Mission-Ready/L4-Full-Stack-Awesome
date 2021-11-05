const express = require('express');
const app = express();

app.get('/api/user/:userID', (req, res) => {
    console.log("params: ", req.params)
    console.log(req.query)
    res.sendStatus(200)
})

app.listen(4000)