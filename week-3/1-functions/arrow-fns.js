// Normal Function
// function sum(firstNum, secondNum) {
//   console.log("I am finding the sum");
//   return firstNum + secondNum;
// }

// Arrow function =>
// const sum = (firstNum, secondNum) => {
//   console.log("I am finding the sum");
//   return firstNum + secondNum;
// }

// console.log(sum(1, 2));

// Create an arrow function that takes in two strings, combines the two and returns the result.

/*
const combinedString = (firstStr, secondStr) => {
  return firstStr + " " + secondStr;
}
*/

// If and only if there is just 1 statement in the fns
// No {} required + No return needed.
const combinedString = (firstStr, secondStr) => firstStr + ' ' + secondStr;

console.log(combinedString('Hello', 'World'));

/**
 * Write a function to find the double to a number
 * Eg, input => 10, output => 20
 */

function doubleNum(num) {
  return num * 2;
}

const doubleNum1 = (num) => {
  return num * 2;
}

const doubleNum2 = (num) => num * 2;

// We can remove the () if there is only one parameter.
const doubleNum3 = num => num * 2;

