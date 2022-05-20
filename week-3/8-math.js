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

const randomNumber = Math.random() * 10;
const flooredRandomNumber = Math.floor(randomNumber);
const sqrtOfNumber = Math.sqrt(flooredRandomNumber);
console.log(flooredRandomNumber, sqrtOfNumber);
