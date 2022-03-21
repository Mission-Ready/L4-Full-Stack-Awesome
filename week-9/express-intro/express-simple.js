const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  console.log("Request received at /hello");
  res.send('Hello World from express');
});

app.listen(4000);

/*
  Start has a shortcut
  npm run start === npm start ===> "node index.js"

  
  "scripts": {
        "start": "node index.js",
        "someOtherScript" :"some command"
    },

  npm run someOtherScript
*/
