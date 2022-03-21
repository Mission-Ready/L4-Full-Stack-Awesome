function addNums(num1, num2) {
  return num1 + num2;
}

const subtractNums = (num1, num2) => num1 - num2;

const isNumber = (num) => Boolean(parseInt(num));

/**
 * a function in a separate file that takes in a string and will return a new string with all the vowels removed.
 *
 * "My name is Sebin" => "My nm s Sbn"
 *
 */
const removeVowels = (string) => string.replace(/[aeiou]/gi, '');

// exporting
module.exports = {
  removeVowels,
  addNums,
  subtractNums,
  isNumber,
};
