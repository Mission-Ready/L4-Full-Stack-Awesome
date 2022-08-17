const fs = require('fs');

fs.appendFile('./content/example.txt', `The time now is ${new Date().toString()} \n`,
  (error) => {
    console.log(error);
  }
);
