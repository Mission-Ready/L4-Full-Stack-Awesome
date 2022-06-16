// 1. importing - custom local module
// const myModules = require('./myModules');
const {addNums, isNumber, subtractNums, removeVowels} = require('./myModules');

// 2. importing - npm package from node_modules. Installed using npm.
// const myModules = require('myModules.js');

// 3. Inbuilt functionality - http etc 
// const myModules = require('http');


console.log(addNums(5, 6));
console.log(isNumber(56));
console.log(subtractNums(5, 6));
console.log(removeVowels("My name is Sebin"));
// console.log(myModules.addNums(5, 6));
// console.log(myModules.isNumber(56));
// console.log(myModules.subtractNums(5, 6));
// console.log(myModules.removeVowels("My name is Sebin"));

