const fs = require('fs');

fs.readFile('./content/example.txt', 'utf-8', (error, data) => {
  // IF there is an error, print it
  if (error) {
    console.log(error.message);
  } 
  
  // IF there is NO error, print the content
  else {
    console.log('The contents of example.txt are:', data);
  }
});
