// function divideNumbers(first, second) {
//   return first / second;
// }

divideNumbers(4, 2);

const divideNumbers = (first, second) => {
  return first / second;
};

// Simplifying further
const divideNumbers = (first, second) => first / second;

// With Default parameters
const divideNumbersWithDefault = (first, second = 1) => first / second;
divideNumbersWithDefault(10,2); //5
divideNumbersWithDefault(10); //5
