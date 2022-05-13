// import the http module
const http = require('http');

// create a server
const server = http.createServer((req, res) => {
  if(req.url === '/')
  {
    res.write('Hello from the node.js server. You have visited /.');
    res.write('New stuff');
    res.end();
  }
  else if(req.url === '/car')
  {
    res.write('You have visited /car');
    res.end();
  }
  else {
    res.write('You have visited an invalid route');
    res.end();
  }
});

// Start the server. listen to requests
server.listen(4000);