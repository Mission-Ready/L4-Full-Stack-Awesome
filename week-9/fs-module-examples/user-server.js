const fs = require('fs');

const fileContents = fs.readFileSync('users.json', 'utf8');

const users = JSON.parse(fileContents);

const newUser = {
  name: 'Mary',
  age: 12,
};

users.push(newUser);

console.log(users);

// JSON.stringify => Converts JSON into stings 
fs.writeFileSync('users.json', JSON.stringify(users));
