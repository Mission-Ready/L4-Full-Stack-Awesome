const fs = require('fs');

// using callbacks
fs.readFile('./read-fs.js', 'utf-8', (error, data) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(data);
  }
});

// using promises
// readFile() returns a promise.
fs.promises.readFile('./read-fs.js', 'utf-8')
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
