/**
 *
 * Create 2 endpoints, which are /cat & /dog.
 *    /cat => return an image of a cat
 *    /dog => return an image of a dog
 *
 */

// import the http module
const http = require('http');

// create a server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/cat') {
    res.write(`
    <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" width="100%">
    `);
  } else if (req.url === '/dog') {
    res.write(`
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" width="100%">
    `);
  } else {
    res.write(`<h1> Sorry, we only have cats & dogs.</h1>`);
  }
  res.end();
});

// Start the server. listen to requests
server.listen(5000);
console.log("Started server on port", 5000);
