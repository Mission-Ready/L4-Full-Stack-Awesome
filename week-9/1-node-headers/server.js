const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type','text/html');
  res.write('<h1>Welcome to node.js</h1>');
  // res.setHeader('Content-Type','application/json');
  // res.write('{ "name": "sebin"}');
  res.end();
});

server.listen(4000);
