const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/hello') {
    res.write('Hello World from just http module');
    res.end();
  }
  else
  {
    res.write('Unable to serve the request');
    res.end();
  }
});

server.listen(5000);
