const express = require('express');
const cors = require('cors');
const app = express();

/*
    Any app.use() method is called middleware
    middleware is usually a function that runs 
    when the request gets recieved, that will
    process the request before it gets given to
    the endpoint i.e. app.use(express.json())
    is a middleware that will convert our request
    into json format and then gets passed to the endpoint
    so we can use it with req.body
*/

// required for our api to be able to read form data
app.use(express.urlencoded({extended: true})) 

// converts http request body from string to json
app.use(express.json())

// allows requests to come from anywhere
app.use(cors())


// mock db of users
let users = [{email: 'jadeldik@gmail.com', password: 'pass'}]; 

// endpoint for our form login
app.post('/login', (req, res) => {
    // loop through the array of users
    for (let i = 0; i < users.length; i++) {
        // if the current user in the loop matches our users email and password then send a redirect
        if (users[i].email === req.body.email && users[i].password === req.body.password) {
            return res.redirect('http://127.0.0.1:3000/week-5/day-5/form-app-frontend/userLogin.html')
        }
    }
    // if the loop completes without triggering the if statement then our user is not in the list so return a 400 error
    return res.status(400).send('email or password is incorrect')
})

// endpoint for login request with fetch api
app.post('/loginWithFetch', (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email && users[i].password === req.body.password) {
            return res.sendStatus(200)
        }
    }
    res.sendStatus(400)
})

app.listen(4000)