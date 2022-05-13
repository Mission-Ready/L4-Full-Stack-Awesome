const express = require('express');
const app = express();

app
  .route('/')
  .get((req, res) => {
    console.log('GET called');
    res.send('Hello GET !');
  })
  .post((req, res) => {
    console.log('POST called');
    res.send('Hello POST !');
  })
  .put((req, res) => {
    console.log('PUT called');
    res.send('Hello PUT !');
  })
  .delete((req, res) => {
    console.log('DELETE called');
    res.send('Hello DELETE !');
  })
  .patch((req, res) => {
    console.log('PATCH called');
    res.send('Hello PATCH ! Today is great!');
  });

app.listen(4000, () => console.log('Server ready. Listening to post 4000'));
