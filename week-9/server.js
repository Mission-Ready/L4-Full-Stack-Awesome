const http = require('http');

const server = http.createServer((request, response) => {
  console.log('Request new received at', new Date().toTimeString());
  console.log(
    'endpoint url:',
    request.url,
    'status:',
    response.statusCode,
    'request method:',
    request.method
  );
  if (request.url === '/') {
    response.write('Hello World');
  } else if (request.url === '/icecream') {
    response.write("Here's your icecream");
  } else if (request.url === '/api/userList' && request.method === 'GET') {
    const userList = [
      { id: 5, name: 'John', age: 36 },
      { id: 6, name: 'Jane', age: 26 },
      { id: 7, name: 'Don', age: 20 },
    ];
    const stringifiedResponse = JSON.stringify(userList);
    response.write(stringifiedResponse);
  } else if (request.url === '/api/greet') {
    // http://localhost:4000/api/greet
    response.write('Hello Jad, thanks for visiting this URL');
  } else {
    response.write('Invalid endpoint url or method called.');
  }
  response.end();
});

console.log('process.env.WHOAMI', process.env.TEMP);

server.listen(PORT);
