// imports the http module into our program.
const http = require('http');

// creates a server
const server = http.createServer(

  (request, response) => {
    if(request.url === '/api/greet') {
      response.write('Hello there, thanks for calling the API');
      response.end();
    }
  }

);

// Start the server and keep listening to port 4000
server.listen(4000);

// RUN THE CODE IN THE TERMINAL
// Check you are in the right folder with the `ls` command
// Run `node server.js`
