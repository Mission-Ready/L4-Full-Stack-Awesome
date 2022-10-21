const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/cat') {
    res.write('<img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" width="100%">');
    res.end();
  } else if (req.url === '/dog') {
    res.write('<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" width="100%">');
    res.end();
  }
});

server.listen(4000);
