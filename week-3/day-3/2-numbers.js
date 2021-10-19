/*
  Exercise 5 (a)
  ==========

  Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
    Assign the return value of the function to a variable called halvedNumber.
    Print out a log like "Half of 5 is 2.5.“ using the variable

*/

function halfNumber(wholeNumber) {
  const halvedNumber = wholeNumber/2;
  return halvedNumber;
}

const result = halfNumber(23);
console.log('Half of 5 is ' + result);

/*
  Exercise 5 (b)
  ==========
  Write a function (you choose the name) that takes an integer minutes and returns seconds.
  Prompt the user to enter minutes.
  Call the function and alert the output.

*/

function getTimeInSeconds(timeInMinutes) {
  const timeInSeconds = timeInMinutes * 60;
  return timeInSeconds;
}

const userInputMinutes = prompt('Enter the minutes', '5');
const timeInSeconds = getTimeInSeconds(userInputMinutes);
alert(userInputMinutes + ' minutes is ' + timeInSeconds + ' seconds');

let person = {  
  firstName : "Sebin", 
  lastName: "Benjamin" 
};
console.log(person.firstName + ' ' + person.lastName);