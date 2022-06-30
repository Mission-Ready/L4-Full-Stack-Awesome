const fs = require('fs');

// writeFile() is asynchronously executed.
fs.writeFile('./content/example.txt', 'Today is Wednesday', (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log('Success: File written');
  }
});

console.log('This is in line 12');
