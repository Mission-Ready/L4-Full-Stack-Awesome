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
