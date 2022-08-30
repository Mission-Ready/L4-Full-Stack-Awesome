// Conditionals and Comparisons

// Strict comparisons (===, !==)
console.log(10 == '10'); // true
console.log(10 === '10'); // false

// Exercise 1
console.log(1 == 1); // true
console.log(12 != 13); // true
console.log(43 !== '43'); // true
console.log(15 > 9); // true
console.log(0 > 1); // false
console.log('120' == 121); // false
console.log('10' === '10'); // true
// Conditionals

// if statement
if (1 === 1) {
  console.log('The condition is true');
}

// else statement
if (1 === 1) {
  console.log('The condition is true');
} else {
  console.log('The condition is false');
}

// if else statement
if (1 === 1) {
  console.log('The condition is true');
} else if (2 === 2) {
  console.log('The second condition is true');
} else {
  console.log('The condition is false');
}

// Exercise 2
const num = 10;

if (num > 0) {
  console.log('The number is positive');
} else if (num === 0) {
  console.log('The number is 0');
} else {
  console.log('The number is negative');
}

// Exercise 3
const myString = 'apple';

if (myString[0] === 'a') {
  console.log(true);
} else {
  console.log(false);
}

// Ternary operator
// condition ? executesIfTrue : executesIfFalse
let word = 'hippopotamus';

// Ternary example
word.length > 10
  ? console.log('The word is long')
  : console.log('The word is not long');

// if else example
if (word.length > 10) {
  console.log('The word is long');
} else {
  console.log('The word is not long');
}

// Exercise 4
word[0] === 'h'
  ? console.log('The word might be hippopotamus')
  : console.log('The word is definitely not hippopotamus');

// Logical operators (&&, ||)
word = 'responsiveness';

// && (AND) operator
if (word.length > 10 && word.length < 15) {
  console.log('The word is long');
} else if (word.length > 15) {
  console.log('The word is REALLY long');
}

// || (OR) operator
if (word.length === 0 || word.length > 25) {
  console.log('The word is outside of the valid checking range');
}

// Switches
const fruit = 'banana';

switch (fruit) {
  case 'orange':
    console.log('The fruit is an orange');
    break;
  case 'strawberry':
    console.log('The fruit is a strawberry');
    break;
  case 'banana':
    console.log('The fruit is a banana');
    break;
  default:
    console.log('fruit not found');
}

// Loops

// for loop (console.log's numbers 0 - 5)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Exercise 1
for (let i = 5; i <= 20; i = i + 1) {
  console.log(i);
}

// OR

for (let i = 5; i < 21; i = i + 1) {
  console.log(i);
}

// Exercise 2
for (let i = 10; i <= 1; i--) {
  console.log(i);
}

// Exercise 3
word = 'responsiveness';

for (let i = 0; i < 10; i++) {
  console.log(word[i]);
}

// While loops
let x = 0;

while (x < 10) {
  console.log('The loop is running');
  x++;
}

// Flow of control
console.log('This is a statement of code - 1');
console.log('This is a statement of code - 2');
console.log('This is a statement of code - 3');
x = 3;
while (x < 5) {
  console.log('We re in the loop');
  x++;
}
console.log('This is a statement of code - 4');
console.log('This is a statement of code - 5');

// Exercise 4
// While loops
let x = 20;

while (x >= 10) {
  console.log('The loop is running', x);
  x--;
}
console.log('The loop has ended');

// Without a break
console.log('Before the loop');
for (let i = 0; i <= 5; i++) {
  console.log('In the loop', i);
}
console.log('The loop has ended. Outside the loop');

// A "break" will break out of the loop, abandon remaining iterations AND the program continues.
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
console.log('The loop has ended');

// A "continue" will skip an iteration of the loop
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Breaking an infinite loop
let x = 0;

while (true) {
  if (x === 3) {
    console.log('x is now 3');
  }
  if (x === 10) {
    console.log('x is now 10');
  }
  if (x === 15) {
    console.log('x is now 15');
    break;
  }
  x++;
}

/* 
    Exercise 5
    ----------
    Use any loop to loop through a string.
    If you find a symbol in the string i.e. !, @, #, $, %, ^, &, * then console.log an error message and break the loop.
    - Example 1, for the string “Apple”, you would not break at all.
    - Example 2, for the string “Ap#le”, you would break at #.
*/

// Answer 1 - simple
let string = 'A string!';

for (let i = 0; i < string.length; i++) {
  if (
    string[i] === '!' ||
    string[i] === '@' ||
    string[i] === '#' ||
    string[i] === '$' ||
    string[i] === '%' ||
    string[i] === '^' ||
    string[i] === '&' ||
    string[i] === '*'
  ) {
    console.log(
      'Error: a restricted symbol was found in the string.',
      string[i]
    );
    break;
  }
  // else {
  //   console.log(string[i]);
  // }
}

// Answer 2 - prints the symbol as well
string = 'A str@ing!ask hfsdj545';

for (let i = 0; i < string.length; i++) {
  if (
    string[i] === '!' ||
    string[i] === '@' ||
    string[i] === '#' ||
    string[i] === '$' ||
    string[i] === '%' ||
    string[i] === '^' ||
    string[i] === '&' ||
    string[i] === '*'
  ) {
    console.log(
      'Error: a symbol was found in the string.',
      'Found a ',
      string[i]
    );
    break;
  }
  console.log('Looking at the following letter now', i);
}

// Exercise 6
string = 'i! a!m! !a! s!t!r!i!n!g';

for (let i = 0; i < string.length; i++) {
  if (string[i] === '!') {
    continue; // letter/rest of the statements in the iteration of the loop is skipped
  }

  console.log(string[i]);
}

// Recap - Switch vs If/Else
let todayDay = 3;
switch (todayDay) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

if (todayDay === 0) {
  day = 'Sunday';
}
else if (todayDay === 1) {
  day = 'Monday';
}
else if (todayDay === 2) {
  day = 'Tuesday';
}
else if (todayDay === 3) {
  day = 'Wednesday';
}
else if (todayDay === 4) {
  day = 'Thursday';
}
else if (todayDay === 5) {
  day = 'Friday';
}
else if (todayDay === 6) {
  day = 'Saturday';
}
