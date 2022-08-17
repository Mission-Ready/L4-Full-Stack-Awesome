// this a class called Person with one property name
class Person {
  name = 'Sebin';
}

// sebin is the object of the Class person
const sebin = new Person();
console.log(sebin.name);

const john = new Person();
john.name = 'John';
console.log(john.name);

/**
 * 
 * Exercise - 0 
 * ============
    Create a Class called recipes with the following properties & methods
      * Title
      * Servings
      * Ingredients (an array of strings).
      > makeRecipes() -> A methods that prints a message –  ‘Your food is ready !'
      > showDetails() -> A methods that prints all the info about the recipes.
      > constructor() -> To initialize the properties of the class
    Use the constructor to create 2 recipe objects and 
    call makeRecipes and showDetails on both the objects.
 */

class Recipe {
  constructor(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
  }

  makeRecipes() {
    console.log('Your food is ready !');
  }

  showDetails() {
    console.log('Title:', this.title);
    console.log('Servings:', this.servings);
    console.log('Ingredients:', this.ingredients);
  }
}

const teaRecipe = new Recipe('Tea', 2, ['water', 'tea-bags', 'milk']);
const coffeeRecipe = new Recipe('Coffee', 2, ['water', 'coffee', 'sugar']);

console.log(teaRecipe);
console.log(teaRecipe.ingredients);
console.log(teaRecipe.makeRecipes());
console.log(teaRecipe.showDetails());
console.log(coffeeRecipe.showDetails());

// Getters
const student = {
  // data property
  firstName: 'Monica',
  // accessor property(getter)
  get getName() {
    return this.firstName;
  },
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error

// Setter
const student2 = {
  firstName: 'Monica',

  //accessor property(setter)
  set changeName(newName) {
    this.firstName = newName;
  },
};
console.log(student2.firstName); // Monica

// change(set) object property using a setter
student2.changeName = 'Sarah';
console.log(student2.firstName); // Sarah

/**
 * Exercise  2
 * ===========
 * Create a CarSales class that has getter and setter methods 
   to ensure that a carList array is maintained using getters and setters.
 * When the user assigns a value to a car property, add it to the carList array.
 * When the user tries to read the value of the car property, return the entire array. 
    * If the array is empty, print out a message that says – ‘Sorry! We don’t have any cars yet’
  
  Bonus : 
  -------
  * Create a rentACar() method that takes a car off the carList
  * Create a returnCar() method that adds a car back to the carlist
 * 
 */

class CarSales {
  carList = [];

  set car(carName) {
    this.carList.push(carName);
  }

  get car() {
    if (this.carList.length === 0) {
      return 'Sorry! We don’t have any cars yet';
    }
    return this.carList;
  }

  // Bonus methods
  rentCar() {
    // for more challenge, find the index and slice the specific car from the array.
    this.carList.pop();
  }
  returnACar(carName) {
    this.carList.push(carName);
  }
}

const bmwSales = new CarSales();
bmwSales.car = 'x1';
console.log(bmwSales.car);
bmwSales.car = 'y1';
console.log(bmwSales.car);
bmwSales.car = 'z1';
console.log(bmwSales.car);
