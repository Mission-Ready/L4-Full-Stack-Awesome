const express = require('express');
const app = express();// creates an express server

// takes a path and an arrow function
// similar to the createServer(()) in http module
app.get('/', (request, response)=> {
  response.send('Hello Express'); // write + end
})

app.get('/sebin', (request, response)=> {
  response.send('Hello Sebin');
})

// starts the server to accept requests from port 4000
app.listen(4000);