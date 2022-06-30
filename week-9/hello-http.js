const http = require('http');

const server = http.createServer((request, response) => {
    response.write('Hello World');
});

server.listen(4000);
