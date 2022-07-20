const sum = (num1, num2) => {
  //  less than 0 => negative
  // greater than 2 => positive
  if (num < 0 && num > 2) return 10 + num2;
  return num1 + num2;
};

/**
 * Checks if a given number is prime number
 * @param {*} num Number to check if prime
 * @returns boolean value
 */
const checkIfPrime = (num) => {
  // Runs from 2 upto sqrt(num)
  // Eg, checkIfPrime(16) 2 to sqrt(16), ie 2 to
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

module.exports = {
  sum,
  checkIfPrime,
};
