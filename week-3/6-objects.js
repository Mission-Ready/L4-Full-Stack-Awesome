// Larger example

const address = {
  contactName: 'Sebin',
  contactPhone: '01234567',
  companyName: 'MRHQ',
  buildingName: 'L5',
  addressLine1: '115 Queen Street',
  addressLine2: 'Auckland',
  addressLine3: 'New Zealand',
  deliveryInstructions: '9 to 5 only',
  senderAddress: 'some address here',
};

console.log(address.contactName);
console.log(address['contactName']);

/*
    Exercise - 3
    =============
    1. Create an object called rectangle with two properties, length and width. The property value should be numbers.
    2. Find the area of the rectangle (Area of a rectangle = Length x Width).
    3. Access the properties using the Square bracket notation.
    4. Console log the area
*/

const rectangle = {
  length: 10,
  width: 50,
};
// const areaOfRectangle = rectangle.length * rectangle.width;
const areaOfRectangle = rectangle['length'] * rectangle['width'];
console.log(areaOfRectangle);

// Why/when use square brackets over dot notation
// const dimensionA = 'length';
// const dimensionA = 'width';
// const areaOfRectangle = rectangle[dimensionA] * rectangle[dimensionB];
// console.log(areaOfRectangle);

/*
    Exercise - 4
    =============
    1. Creates a person object containing a firstName, lastName and favoriteNumber,favoriteDay properties.
    2. console.log the object
    3. Add a property called favoriteFood to the object.
    4. console.log the object
    5. Remove the favoriteDay property from the object. Double the value  of the favoriteNumber property.
    6. console.log the object
*/

const person = {
  firstName: 'Sebin',
  lastName: 'Benjamin',
  favoriteNumber: 3,
  favoriteDay: 'Friday',
};

console.log(person);
person.favoriteFood = 'Icecream';

console.log(person);
delete person.favoriteDay;

person.favoriteNumber = person.favoriteNumber * 2;
console.log(person);

// for ... in loop example
const student = {
  name: 'Sebin',
  year: 5,
};

for (const key in student) {
  console.log(key);
  console.log(student[key]);
}

/**
 Exercise - 5
 =============
  * Loop through the following user object using the for..in loop.
      const user = { 
        name: "John", 
        age: 5, 
        isAdmin: true 
      };
  * Within the loop, log the value of the key `age`.
*/

const user = {
  name: 'John',
  age: 5,
  isAdmin: true,
};

for (const key in user) {
  if (key === 'age') {
    console.log(user[key]);
    break; // optional - quits after you've got the key called age and its value printed.
  }
}

/*
    Exercise - 5.1
    =============
    1. Create an object myFavNumbers with three of your favourite numbers as values (any names for keys)
    2. Loop through the object using for..in and find the sum of the numbers.
    3. Console log the sum & the object.
*/

const myFavNumbers = {
  firstNum: 2,
  secondNum: 3,
  thirdNum: 4,
};

let sum = 0; // 0 + 2 = 2 ; 2 + 3 = 5; 5 + 4 = 9
for (const key in myFavNumbers) {
  sum = sum + myFavNumbers[key];
  // sum += myFavNumbers[key];
}

console.log(sum, myFavNumbers);

/* 
  Exercise - 6 
  =============
  Create an array of your favorite fruits and Console log the array.

*/

const food = ['veggies', 'popcorn', 'chocolate', 'apples', 'oranges'];
for (i = 0; i < goodFood.length + 2; i++) {
  console.log(goodFood[i], i);
}

/* 
  Exercise - 7 
  =============
  Create an array of numbers, say 5 to 10.
  Find the average of the numbers and console log the average.
*/
const numbers = [5, 6, 7, 8, 9, 10];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  const num = numbers[index];
  sum = sum + num;
}
const average = sum / numbers.length;
console.log('The average of numbers', numbers, 'is', average); // 7.5

/**
    (5 + 6 + 7 + 8 + 9 + 10) / 6
    7.5

    5/6 + 6/6 + 7/6 + 8/6 + 9/6 + 10/6
    7.5 
 */

numbers = [5, 6, 7, 8, 9, 10];
numbers.push(11);

const arrayOfObjects = [
  {
    name: 'Sebin',
    favColor: 'Grey',
  },
  {
    name: 'Jane',
    favColor: 'White',
  },
];

arrayOfObjects[0];
arrayOfObjects[1].name;
arrayOfObjects[1].favColor;

/** Exercise - 8
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
  ingredients: ['coffee', 'water', 'milk'],
};

console.log(favoriteRecipe, favoriteRecipe.ingredients.length);
favoriteRecipe.ingredients.push('sugar');
// favoriteRecipe.ingredients[3] = 'sugar';
console.log(favoriteRecipe);

let person = {
  name: 'Sebin',
  age: 25,
  address: {
    companyName: 'MRHQ',
    buildingName: 'L5',
    addressLine1: '115 Queen Street',
    addressLine2: 'Auckland',
    addressLine3: 'New Zealand',
    deliveryInstructions: '9 to 5 only',
    senderAddress: 'some address here',
  },
};
