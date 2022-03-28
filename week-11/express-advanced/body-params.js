/**
 * Ways to grab information from the client/user
 *  3. Body Params
 *    More secure
 *    app.use(express.json()); Needs extra processing
 *    const { name } = req.body;
 */

const express = require('express');
const app = express();

app.use(express.json()); // Middleware added to process the json body params

app.post('/student', (req, res) => {
  console.log('Received a GET request to /student');
  console.log(`Got some body params ${JSON.stringify(req.body)}`);
  res.send(`Got some body params ${JSON.stringify(req.body)}`);
});

const PORT = 5000;
console.log('Server running at port', PORT);
app.listen(PORT);

/*
fetch('localhost:5000/student', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Sebin',
    id: 100356,
    password: 'abcd123',
  }),
})
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
 
*/