/*

Exercise 1
==========

1. Create two variable in JavaScript, using the const keyword.
2. Assign the following value to the variables.

	The exact phrase she used was “There is no way we will get there in time.”
	Jane’s favorite class is English.

3. Console log the variable to print out its value.

*/
const first = 'The exact phrase she used was "There is no wat we will get there in time."';
const second = "Jane's favorite class is English.";
console.log(first, second);

/*
Exercise 2
==========
1. Create two variable in JavaScript, using the const keyword.
2. This time assign the following values using escape characters.

	The exact phrase she used was “There is no way we will get there in time.”
	
	Jane’s favorite class is English.

3. Console log the variable to print out its value.
*/

const firstB = "The exact phrase she used was \"There is no wat we will get there in time.\"";
const secondB = 'Jane\'s favorite class is English.';
console.log(firstB, secondB);

/**
 * Exercise 3
 * 
*/

const quotePart1 = "\"Concentrate all you thoughts ";
const quotePart2 = "upon the work in hand. The sun's rays do not burn ";
const quotePart3 = "until brought to a focus.\"";
const quotePart4 = "— Alexander Graham Bell";

const quote = quotePart1 + quotePart2 + quotePart3 + quotePart4;
console.log(quote);
console.log(quote.length);


const numStr = prompt("Enter number 1")
const numStr2 = prompt("Enter number 2")
const parsedNumStr = parseInt(numStr);
const parsedNumStr2 = parseInt(numStr2);
console.log(parsedNumStr  + parsedNumStr2)