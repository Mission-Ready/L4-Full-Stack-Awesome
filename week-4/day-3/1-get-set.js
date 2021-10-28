/**
 *  Exercise - 0
    1. Create a Class called recipes with the following properties & methods
        Title
        Servings
        Ingredients (an array of strings).
        makeRecipes() -> A methods that prints a message –  ‘Your food is ready !’
        showDetails() -> A methods that prints all the info about the recipes.
        constructor() -> To initialize the properties of the class
    2. Use the constructor to create 2 recipe objects and call makeRecipes and showDetails on both the objects.
*/

class Recipes {
  constructor(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients; // an array of strings
  }
  makeRecipe() {
    console.log('Your ' + this.title + ' is ready !');
  }
  showDetails() {
    console.log(this.title, this.servings, this.ingredients);
  }
}

const coffee = new Recipes('Coffee Recipe', 5, ['water', 'milk', 'sugar']);
const panCakes = new Recipes('Pancakes', 5, ['flour', 'milk', 'butter']);
coffee.makeRecipe();
coffee.showDetails();

panCakes.makeRecipe();
panCakes.showDetails();

/** Getters */

const person = {
  firstName: 'Sebin',
  lastName: 'Benjamin',
  get name() {
    // console.log('A getter for "name" is just called');
    return this.firstName + ' ' + this.lastName;
  },
};

/** Setters */
const person = {
  firstName: 'Sebin',
  lastName: 'Benjamin',
  get name() {
    return this.firstName + ' ' + this.lastName;
  },
  set newFirstName(fName) {
    // some code here to convert first letter to be capitalized
    this.firstName = fName;
  },
  // get newFirstName() {
  //   return this.firstName;
  // },
  set newLastName(lName) {
    this.lastName = lName;
  },
};
person.newFirstName = 'Annlyn';
// console.log(person.newFirstName);

// Setters to check updates to values
let language = {
  log: [],
  set current(name) {
    this.log.push(name);
  },
};
console.log(language.log);
language.current = 'EN';
console.log(language.log);
language.current = 'FA';
console.log(language.log);

/* 
    Exercise - 1 
    ============    
    1. Build a bank account object, consisted of:
              Bank (2 digits)
              Branch (4 digits)
              Account (7 digits)
              Suffix (2 digits)
    2. Allows user to change suffix number only
    3. Allows user to display account number in the format 								
              00-0000-0000000-00 
              [bank-branch-account-suffix]
*/

let bankAccount = {
  bankCode: '01',
  branch: '1234',
  account: '1234567',
  suffix: '01',
  set newSuffix(suffix) {
    this.suffix = suffix;
  },
  get accountNo() {
    return (
      this.bankCode + '-' + this.branch + '-' + this.account + '-' + this.suffix
    );
  },
};

console.log(bankAccount.accountNo);
bankAccount.newSuffix = '99';
console.log(bankAccount.accountNo);

// BONUS Answer
let bankAccount = {
  _bankCode: '01',
  _branch: '1234',
  _account: '1234567',
  _suffix: '01',

  get bankCode() {
    return this._bankCode;
  },
  set bankCode(_) {
    console.log('Sorry, you are not allowed to change the bankCode');
  },

  set branch(_) {
    console.log('Sorry, you are not allowed to change the branch');
  },

  get branch() {
    return this._bankCode;
  },

  set account(_) {
    console.log('Sorry, you are not allowed to change the account');
  },

  get account() {
    return this._account;
  },

  get accountNo() {
    return (
      this._bankCode +
      '-' +
      this._branch +
      '-' +
      this._account +
      '-' +
      this._suffix
    );
  },

  set suffix(newSuffix) {
    this._suffix = newSuffix;
  },

  get suffix() {
    return this._suffix;
  },
};

console.log(bankAccount.accountNo);
bankAccount.suffix = '99';
bankAccount.account = '1235';
console.log(bankAccount.accountNo);

/**
 *  Exercise 2
 *  
    1. Create a CarSales class that has getter and setter methods to ensure that a carList array is maintained using getters and setters.
      * When the user assigns a value to a  car property , add it to the carList array.
      * When the user tries to read the value of the car property, return the entire array. If the array is empty, print out a message that says – ‘Sorry! We don’t have any cars yet’
    2. Bonus : 
      * Create a rentACar() method that takes a car off the carList
      * Create a returnCar() method that adds a car back to the carlist
 */

class CarSales {
  constructor() {
    this.carList = [];
  }

  set car(name) {
    this.carList.push(name);
  }

  get car() {
    if (this.carList.length === 0) {
      console.log('Sorry! We don’t have any cars yet');
      return [];
    } else {
      return this.carList;
    }
  }
}

const companyA = new CarSales();
companyA.car = 'Tesla Model X';
companyA.car = 'Toyata Yaris';
console.log(companyA.car);

// Bonus Answer
class CarSales {
  constructor() {
    this.carList = [];
  }
  set car(carName) {
    this.carList.push(carName);
  }
  get car() {
    if (this.carList.length) {
      return this.carList;
    } else {
      console.log('Sorry! No card available');
    }
  }
  rentACar() {
    return this.carList.pop();
  }
  returnCar(car) {
    this.carList.push(car);
  }
}

const companyA = new CarSales();
console.log(companyA.car);
companyA.car = 'Tesla Model X';
console.log(companyA.car);
console.log(rentACar());
console.log(returnCar());
console.log(companyA.car);
