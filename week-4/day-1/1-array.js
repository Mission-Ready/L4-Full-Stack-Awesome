/**
 * 
 * Exercise 1  
 * ==========
 * Create a function that takes in an array of food items as a parameter
    The function should return either true or false if the array includes your favourite food.
    Example,

		checkFavoriteFood(foodArray, favFood) which returns true/false.
		checkFavoriteFood([“apple”, “ mango”], “grapes”) gives false
		checkFavoriteFood([“apple”, “ mango”], “apple”) gives true
 * 
 * 
 */

function checkFavoriteFood(foodItemsArray, favFoodItem) {
  return foodItemsArray.includes(favFoodItem);
}

// const checkFavoriteFood = (foodItemsArray, favFoodItem) =>
//   foodItemsArray.includes(favFoodItem);

const fruits = ['apple', 'mango', 'grape'];
checkFavoriteFood(fruits, 'mango'); // true
checkFavoriteFood(fruits, 'banana'); // false

/**
 * Exercise 4
 * ==========
 *
 * Create a function that takes in an array of words
 * The function should return an array of only the words that are longer than 6 characters.
 * (use the filter method)
 *
 */

const randomWords = [
  'word',
  'pen',
  'applesss',
  'alongword',
  'mouse',
  'thiswordhasatleast6chars',
];

const removeLongWords = (words) => words.filter((word) => word.length > 6);
removeLongWords(randomWords);

/**
 * Exercise 5
 * ==========
 * From an array of numbers from 0 – 9 remove the numbers 3 – 7 using the splice method.
 */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.splice(3, 5); // [ 3, 4, 5, 6, 7 ]
console.log(numbers); // [ 0, 1, 2, 8, 9 ]
