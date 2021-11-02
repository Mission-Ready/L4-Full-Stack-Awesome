const http = require('http')

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('hello world')
        response.end()
    }
    if (request.url === '/api/userList') {
        const userList = [
            {"name": "john", "age": 27},
            {"name": "Mary", "age": 22},
            {"name": "Ethan", "age": 17},
            {"name": "Joe", "age": 53},
            {"name": "Amelia", "age": 87},
            {"name": "Adam", "age": 34}
        ]
        response.write(JSON.stringify(userList))
        response.end()
    }
    if (request.url === '/api/greet') {
        response.write('hello this is the greeter api')
        response.end()
    }
})

server.listen(4000)