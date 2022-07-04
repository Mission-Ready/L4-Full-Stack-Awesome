const fs = require('fs');

// new user which we wish to add
const newUser = { name: 'Sebin', age: 25 };

// reading the existing file contents as string
const usersString = fs.readFileSync('users.json', 'utf-8');
const users = JSON.parse(usersString); // converting the string into an array of objects

function addNewUser(newUserData) {
  users.push(newUserData);
}

addNewUser(newUser); // adding the new user to the array of objects

// converting the updated array of objects back into a string to write back to the json file
fs.writeFile('users.json', JSON.stringify(users), (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log('User Details added successfully');
  }
});
