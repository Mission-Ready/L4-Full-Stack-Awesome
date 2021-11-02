const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/userList', (req, res) => {
    const userList = [
        {"name": "john", "age": 27},
        {"name": "Mary", "age": 22},
        {"name": "Ethan", "age": 17},
        {"name": "Joe", "age": 53},
        {"name": "Amelia", "age": 87},
        {"name": "Adam", "age": 34}
    ]

    res.json(userList)
})

app.listen(4000)