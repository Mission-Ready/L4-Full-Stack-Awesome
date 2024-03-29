/*
    Exercise 1 
    ===============
    Pick a random number between 1 and 10 and find its square root.
    Console log the outputs.
*/

const num1 = 5,
  num2 = 35,
  num3 = 26;
const smallest = Math.min(num1, num2, num3);
const largest = Math.max(num1, num2, num3);
console.log('The smallest of the three favorite numbers', smallest);
console.log('The largest of the three favorite numbers', largest);
console.log('Square of the smallest number', Math.pow(smallest, 2));

const fruits = ['apple', 'mango', 'banana'];
fruits[Math.floor(Math.random() * 3)];

/*
    Exercise 2 
    ===============
    Pick a random number between 1 and 10 and find its square root.
    Console log the outputs.
*/

let randomNumber = (Math.random() * 10) + 1;
let flooredRandomNumber = Math.floor(randomNumber);
let sqrtOfNumber = Math.sqrt(flooredRandomNumber);

console.log(flooredRandomNumber, sqrtOfNumber);

/*

Math.random() => 0 upto 1;
Math.random() * 10 => 0 upto 10;
Math.floor(Math.random() * 10) => 0 upto 10, without any fractions/decimals
Math.floor(Math.random() * 10) + 1 => 1 upto 11 without fractions 

- Random number between min (included) and max (excluded):
Math.floor(Math.random() * (max - min) ) + min;
Math.floor(Math.random() * (10 - 1) ) + 1;
Math.floor(Math.random() * (9)) + 1;

- Returns a random number between min and max (both included):
Math.floor(Math.random() * (max - min + 1) ) + min;
Math.floor(Math.random() * (10 - 1 + 1) ) + 1;
Math.floor(Math.random() * (10) ) + 1;
*/