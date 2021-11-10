const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

/** 
    Request is the HTTP request. It gives us all the request information, including the request parameters, the headers, the body of the request, and more.
    Response is the HTTP response object that we’ll send to the client.
**/ 
app.get('/', (req, res) => {
  console.log('GET called');
  res.send('Hello GET !');
});

app.post('/', (req, res) => {
  console.log('POST called');
  res.send('Hello POST !');
});

app.put('/', (req, res) => {
  console.log('PUT called');
  res.send('Hello PUT !');
});

app.delete('/', (req, res) => {
  console.log('DELETE called');
  res.send('Hello DELETE !');
});

app.patch('/', (req, res) => {
  console.log('PATCH called');
  res.send('Hello PATCH ! Today is great!');
});

app.listen(4000, () => console.log('Server ready'));
