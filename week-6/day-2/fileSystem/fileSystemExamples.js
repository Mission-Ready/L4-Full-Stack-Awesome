const fs = require('fs');

// reading data from a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    console.log(data)
})

// reading data from a file synchronously
const fileInfo = fs.readFileSync('example.txt', 'utf8')
console.log(fileInfo)

// reading json data
fs.readFile('users.json', 'utf8', (err, data) => {
    console.log(data)
    const jsonData = JSON.parse(data);
    console.log('Json Data: ', jsonData)
})

// reading json data synchronously
const rawData = fs.readFileSync('users.json', 'utf8')
const data = JSON.parse(rawData)
console.log('Json Data sync: ', data)

// add data to txt file
fs.writeFile('fileToWriteTo.txt', 'this is text that didnt exist before', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('data added!')
    }
})

// append info to a file
fs.appendFile('example.txt', '\nhello again world',  (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('data added!')
    }
})

const newUser = {name: "james", age: 27} // define a new user

let users = fs.readFileSync('users.json', 'utf8') // read user list json
users = JSON.parse(users) // convert list to JSON 

users.push(newUser) // add new user to original list
users = JSON.stringify(users) // convert list back to string

// write data to users.json file
fs.writeFile('users.json', users, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('user added!')
    }
})

// exercise answer
let userList = fs.readFileSync('users.json', 'utf8')
userList = JSON.parse(userList) 

userList.forEach(user => console.log(user.name))