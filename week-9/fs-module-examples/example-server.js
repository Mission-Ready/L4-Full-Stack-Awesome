const fs = require('fs');

// Asynchronous version (non-blocking) of Reading a file
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('data', data);
//   }
// });

// Synchronous form (blocking)
const fileContent = fs.readFileSync('example.txt', 'utf8');
console.log('fileContent: ', fileContent);

const fileContent2 = fs.readFileSync('users.json', 'utf8');
console.log('fileContent2: ', fileContent2);

// JSON.parse() converts string to a JSON object. 
const jsonFileContent = JSON.parse(fileContent2);
console.log('jsonFileContent: ', jsonFileContent);

