/*
    Exercise - 2
    =============
    1. Create an object called rectangle with two properties, length and width. The property value should be numbers.
    2. Find the area of the rectangle (Area of a rectangle = Length x Width).
    3. Access the properties using the Square bracket notation.
    4. Console log the area
*/

const rectangle = {
  length: 10,
  width: 50
}
// const areaOfRectangle = rectangle.length * rectangle.width;
const areaOfRectangle = rectangle['length'] * rectangle['width'];
console.log(areaOfRectangle);

// Why/when use square brackets over dot notation
// const dimensionA = 'length';
// const dimensionA = 'width';
// const areaOfRectangle = rectangle[dimensionA] * rectangle[dimensionB];
// console.log(areaOfRectangle);

/*
    Exercise - 3
    =============
    1. Creates a person object containing a firstName, lastName and favoriteNumber,favoriteDay properties.
    2. console.log the object
    3. Add a property called favoriteFood to the object.
    4. console.log the object
    5. Remove the favoriteDay property from the object. Double the value  of the favoriteNumber property.
    6. console.log the object
*/    

const person = {
  firstName : 'Sebin', 
  lastName : 'Benjamin',
  favoriteNumber : 3,
  favoriteDay: 'Friday'
}

console.log(person);
person.favoriteFood = 'Icecream'

console.log(person);
delete person.favoriteDay;

person.favoriteNumber = person.favoriteNumber * 2;
console.log(person);

/*
    Exercise - 4
    =============
    1. Create an object myFavNumbers with three of your favourite numbers as values (any names for keys)
    2. Loop through the object using for..in and find the sum of the numbers.
    3. Console log the sum & the object.
*/

const myFavNumbers = {
  firstNum: 2,
  secondNum: 3,
  thirdNum: 4
}

let sum = 0;// 0 + 2 = 2 ; 2 + 3 = 5; 5 + 4 = 9
for (const key in myFavNumbers) {
  sum = sum + myFavNumbers[key];
  // sum += myFavNumbers[key];
}

console.log(sum, myFavNumbers);

/*
    Exercise - 5
    =============
    1. Create an object to hold information on your favorite recipe. It should have properties for a 
        1.  title (a string), 
        2.  servings (a number), 
        3.  and ingredients (an array of strings).
    2. Console log the object and the number of the ingredients in the recipe.
    3. Add an extra ingredient ‘water’ to your recipe. [hint: Use array.push()]
    4. Log the object to the console.

*/

const favoriteRecipe = {
  title: 'Coffee',
  servings: 2,
  //                0        1       2
  ingredients: ['coffee', 'water', 'milk']
};

console.log(favoriteRecipe, favoriteRecipe.ingredients.length);
favoriteRecipe.ingredients.push('sugar');
// favoriteRecipe.ingredients[3] = 'sugar';
console.log(favoriteRecipe);
