// JS Exercise 1
// ================
// Step 1
console.log("I am learning to create and use variables");

// Step 2 - Creating a variable using let and Store the value "Sebin" into the variable "myFirstName"
let myFirstName = "Sebin"; // 

// Step 3 - Print out the value using console.log
console.log(myFirstName);



// JS Exercise 2
// ================
// Step 1 - declaring and assigning a value to a variable
let myfavColor = "green";

// Step 2 - Print out the value of the variable myfavColor
console.log("My fav color is");
console.log(myfavColor); // It should print out green

// Step 3 - Change the variable value to blue (reassigned)
myfavColor = "blue";

// Step 4 - Print out the value of the variable myfavColor
console.log("My fav color is changed to");
console.log(myfavColor); // It should print out blue



// JS Exercise 3
// ================
// Step 1 - declaring and assigning a value to a variable
const myfavFood = "banana";

// Step 2 - Print out the value of the variable myfavFood
console.log("My fav food is");
console.log(myfavFood); // It should print out green

// Step 3 - Change the variable value to blue (reassigned)
// I get an error as I am trying to change a constant
myfavFood = "icecream";

// Step 4 - Print out the value of the variable myfavFood
console.log("My fav food has changed to");
console.log(myfavFood); // It should still print out blue



/*
JS Concept - Declaring & then assigning values
==============================================
*/

// Declaring the variable & assigning value at the same time
let isItRainingToday = "Yes";

// Declaring and assigning is in later statements
let isItRainingToday;
//some other code could be here
isItRainingToday = "Yes";



/* JS Concept - Declaring &Assigning multiple variables in a statement
   ===================================================================
   Declare & assign firstName & LastName
*/

// Step 1 
// const firstName = "Sebin";
// const lastName = "Benjamin";

// OR

const firstName = "Sebin", lastName = "Benjamin";

// Step 2 - Print out to check the values
console.log("My first name is ");
console.log(firstName);
console.log("My last name is ");
console.log(lastName);