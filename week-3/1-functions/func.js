// first function
function myFirstFunction() {
  console.log('I just called my first function');
}
myFirstFunction(); // This is a function call

function stringCombine(str1, str2) {
  return str1 + ' ' + str2;
}
console.log(stringCombine('Hello', 'World')); // This is a function call

function greet(userName) {
  console.log('Greetings', userName);
}
greet('Sebin');
greet('Tom');
greet('Ray');

// function with params
function FuncWithParams(num1, num2) {
  console.log(num1 + num2);
}

FuncWithParams(3, 4);

// Exercise 1

function addString(param1, param2) {
  console.log(param1, param2);
}

addString('Hello', 'World');
addString('Today is', 'Monday');

// Exercise 2

function joinStrings(string1, string2) {
  const combinedString = string1 + ' ' + string2;
  console.log(combinedString);
}

joinStrings('Hello', 'World');
joinStrings('Today is', 'Monday');

// return statements
function FuncWithParams(num1, num2) {
  return num1 + num2;
  console.log(num1 + num2);
}

console.log(FuncWithParams(3, 4));

let funcAnswer = myFirstFunction(3, 4);

if (funcAnswer === 7) {
  console.log('the answer is right');
} else {
  console.log('the answer is wrong');
}

// Arrow function
const arrowFunc = (num1, num2) => num1 + num2;

console.log(arrowFunc(3, 4));

let player = 'P1';

let playerHealth = 100;

function Attack(damageTaken) {
  playerHealth = playerHealth - damageTaken;
}

function GetHealth() {
  return playerHealth;
}

console.log('Starting Health: ', GetHealth());

Attack(10);
Attack(40);
Attack(30);

console.log('Ending Health: ', GetHealth());

/*
Exercise 3
=========
Create a function that takes in a string and returns false if the string is empty and true if it is not. 
	(Hint: an empty string always == false).
After the result is returned, console.log the result to the browser.
*/

function isStringEmpty(stringToBeChecked) {
  if (stringToBeChecked == '') {
    return true;
  } else {
    return false;
  }
}

// Exercise 2
function isStringEmpty(stringToBeChecked) {
  if (stringToBeChecked === '') {
    return true;
  }
  return false;
}

let result = isStringEmpty('Hello World');
console.log(result);

result = isStringEmpty('');
console.log(result);

function greet() {
  console.log('Hello World');
}

greet();

const greetWithArrowFns = () => {
  console.log('Hello World');
};

greetWithArrowFns();

/**
 Arrow function - Exercise 4
 ===========================
 * Create an arrow function that takes in two strings, combines the two and returns the result.
 * Console log the result on the browsers console.
 */
const joinStrings = (string1, string2) => {
  const combinedString = string1 + ' ' + string2;
  return combinedString;
};

console.log(joinStrings('Hello', 'World'));
