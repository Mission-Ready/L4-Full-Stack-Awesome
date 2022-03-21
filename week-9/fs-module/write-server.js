const fs = require('fs');

// replace everything in the file with the text that we provide
fs.writeFile(
  'example.txt',
  "Today is a good day!",
  (err) => {
    console.log(err);
  }
  );
  
// Adds the text that we provide to the end of the file.
fs.appendFile(
  'example.txt',
  "I am happy today",
  (err) => {
    console.log(err);
  }
);
