/**
 * Ways to grab information from the client/user
 *  3. Body Params
 *    More secure
 *    app.use(express.json()); Needs extra processing
 *    const { name } = req.body;
 */

const express = require('express');
const cors = require('cors');

const { carRouter } = require('../../week-9/slide-code/11-2-controllers-with-router/modular-routes');
const app = express();

// Unlike query & route params, you need a additional step here to process Body params
app.use(express.json()); // Middleware added to process the json body params
app.use(cors()); 

// POST request, instead of GET
app.post('/student', (req, res) => {
  console.log('Received a POST request to /student');
  console.log(`Got some body params ${JSON.stringify(req.body)}`);
  res.send(`Got some body params ${JSON.stringify(req.body)}`);
});

app.get('/student', (req, res) => {
  console.log('Received a GET request to /student');
  res.send('This is a GET response');
});

console.log('Server running at port', 4000);
app.listen(4000);

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