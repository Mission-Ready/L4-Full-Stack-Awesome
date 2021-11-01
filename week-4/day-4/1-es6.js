// Arrow functions
// Default parameters
function multiply(firstOperand, secondOperand = 1) {
  console.log('firstOperand', firstOperand)
  console.log('secondOperand', secondOperand)
  return firstOperand * secondOperand;
}

console.log('Result is: ', multiply(5, 2)); // expected output: 10
console.log('Result is: ', multiply(5)); // expected output: 5


function functionName() {
  // some statements in the function body.
}

const arrowFunctionName = () => {
  // some statements in the function body.
};

const multiply = (firstOperand, secondOperand = 1) => {
  console.log('firstOperand', firstOperand);
  console.log('secondOperand', secondOperand);
  return firstOperand * secondOperand;
};

// in case we have only one statement in the function body
// we could skip the { }'s and the return keyword
const multiply = (firstOperand, secondOperand = 1) =>
  firstOperand * secondOperand;
const addOnetoNumber = (num) => num + 1;

// If there is only one parameter for the function, then we can skip the ('s)
const addOnetoNumber = num => num + 1;

// An IIFE using normal function syntax
// 1. No function name
// 2. It is called immediately after it is declared 
(function (num) {
  return num + 1;
})(5); 

// An IIFE using the arrow function syntax
(num => num + 1)(5);

//conditional logic implemented using an if statement
const checkRainStatus = (currentWeather) => {
  if (currentWeather.rain) {
    return 'Please take your rain jackers';
  } else {
    return `Don't worry about the rain`;
  }
};
// function call, ie where the function execution is triggered.
console.log(checkRainStatus({ rain: true }));

// conditional logic implemented using the ternary operator.
// <condition> ? <expression if true> : <expression if false> 
const checkRainStatusSimplified = (currentWeather) => {
  return currentWeather.rain ? 'Please take your rain jackets': `Don't worry about the rain now`;
};
console.log(checkRainStatusSimplified({ rain: true }));

//simplified using the arrow fn syntax
const checkRainStatusSimplified = currentWeather => currentWeather.rain ? 'Please take your rain jackets': `Don't worry about the rain now`;
console.log(checkRainStatusSimplified({ rain: true }));

// call the function with the name 'functionName'.
functionName();

// function normally are required to be found in the same javascript file it is being called.
// you get an error ..something like undefined method
aNonExistingFunction();


const { PI } = Math; // object destructuring

// arrow functions
const area = (r) => PI * r ** 2;
const circumference = (r) => 2 * PI * r;


/** Map */

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// console.log(materials[0],materials[1], materials.length);
materials.map(somefunctionName);

function somefunctionName(material) {
  console.log(material);
}

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// console.log(materials[0],materials[1], materials.length);
materials.map(function (material) {
  console.log(material);
});

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

materials.map((material) => {
  console.log(material);
});

materials.map((material) => console.log(material));

materials.map(material => console.log(material));

// Arrow Functions in ES6
// Template Literals in ES6 