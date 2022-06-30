const express = require('express');

const app = express();

app.all('/', (request, response)=>{
  response.send('Hello World');
});

app.all('/icecream', (request, response)=>{
  response.send('Here\'s your icecream');
});

app.all('/api/greet', (request, response)=>{
  response.send('Hello Jad, thanks for visiting this URL');
});

app.get('/api/userList', (request, response)=>{
  const userList = [
    { id: 5, name: 'John', age: 36 },
    { id: 6, name: 'Jane', age: 26 },
    { id: 7, name: 'Don', age: 20 },
  ];
  response.send(userList);
});

app.listen(4000);