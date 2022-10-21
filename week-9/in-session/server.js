// const greet = name => `Hello ${name}. Welcome to node`;

// const message = greet('Sebin');
// console.log(message)

// function greet(name) {
//   return `Hello ${name}. Welcome to node`;
// }

// const message = greet('Sebin');
// console.log(message)

// importing from another file
const myModule = require('./myModules');
// const { addNums, subtractNums, isNumber } = require('./myModules');
// addNums();//myModule.addNums

console.log(myModule);

const sum = myModule.addNums(2, 4);
const diff = myModule.subtractNums(5, 20);
const isNumber = myModule.isNumber(56);

console.log(sum, diff, isNumber);
