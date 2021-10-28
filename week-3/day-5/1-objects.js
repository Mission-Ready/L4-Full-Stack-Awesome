/*
 Passing Objects as parameters to functions
    * Better organized code
    * Functions with more than 3 parameters are tricky to maintain and are more likely to introduce errors as the number 
*/

function printName(firstName, lastName) {
  console.log('Hello ' + firstName + ' ' + lastName);
}

printName('Sebin', 'Benjamin');

function printNameFromObject(person) {
  console.log('Hello ' + person.firstName + ' ' + person.lastName);
}
const person = {
  firstName: 'Sebin',
  lastName: 'Benjamin',
};
printNameFromObject(person);

// Functions in Objects, ie Methods

const person = {
  firstName: 'Sebin',
  lastName: 'Benjamin',
  greetings: function () {
    console.log('Hello World');
  }
};

// person.greetings - add a () to run the function
person.greetings();
person.firstName;
person['firstName'];

