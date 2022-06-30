const fs = require('fs');

// writeFileSync() is synchronously executed.
const fileContents = fs.readFileSync('./content/example.txt', 'utf-8');

console.log(fileContents);
console.log('This is in line 6');
