/* 
  Exercise 3
  ==========

  1.  Create four variables to store the following strings
        "Concentrate all your thoughts 
        upon the work in hand. The sun's rays do not burn 
        until brought to a focus.”
        — Alexander Graham Bell
  2.  Concatenate them up (using the + operator) 
  3.  Print the entire string in the console, and also
  4.  Print its total length in the console.
*/

const quoteFirstPart = '"Concentrate all your thoughts';
const quoteSecondPart = 'upon the work in hand. The sun\'s rays do not burn';
const quoteThirdPart = 'until brought to a focus.”';
const quoteFourthPart = '— Alexander Graham Bell';

const completeQuote = quoteFirstPart + ' ' + quoteSecondPart + ' ' + quoteThirdPart + ' ' + quoteFourthPart;
console.log(completeQuote, completeQuote.length);

/*
  Exercise 4
  ==========

  Create a function called messageCaseConverter that does the following
      Trims the string passed to it as the parameter.
      Checks the length of a string after trimming and returns a different string based on the following conditions
        * If the length of the string is <= 10, return the uppercase version of the string
        * If the length of the string is > 10, return the lowercase version of the string.
  Prompt the user to enter a sentence and store the value in a variable .
  Call the messageCaseConverter function and alert out the string returned
  
  Examples, if I enter  
                      ‘   Hello world    ‘ 
            I should get 
                      ‘HELLO WORLD’
          
            if I enter
                      ‘   HeLlO EverYone    ‘ 
            I should get 
                      ‘hello everyone’
*/

// I - Creating the fn
// inputString = ‘   HeLlO EverYone    ‘
function messageCaseConverter(inputString) {
  const trimmedInputString = inputString.trim(); // 'HeLlO EverYone'
  const stringLength = trimmedInputString.length;

  // If the length of the string is <= 10, return the uppercase version of the string
  if (stringLength <= 10) {
    return trimmedInputString.toUpperCase(); // HELLOONE
  } else if (stringLength > 10) {
    return trimmedInputString.toLowerCase(); // hello everyone
  }
}

// II - Using the fn
//  Prompt the user to enter a sentence and store the value in a variable .
const userInput = prompt('Please enter a sentence');

// Call the messageCaseConverter function and alert out the string returned
const messageToUser = messageCaseConverter(userInput);
alert(messageToUser);

/*
    Step 1 : Create a string and assign it to a variable
    Step 2 : Find the length of the variable

*/

const someString = 'Hello there! How are you';
console.log(someString.length); // 24


const answer = prompt('What is 2+2', '5');
if (answer != '4') {
  alert('Sorry, wrong answer. 2+2 is 4');
}
