/**
 * Create a function that takes a string as a parameter.
 *    The string should be a name and the function should return a greeting like “Hello <name> welcome to Node”
        console.log the result and execute it with node
 * 
 */

// const greet = (name) => {
//   return `Hello ${name} ! Welcome to Node`;
// };

const greet = (name) => `Hello ${name} ! Welcome to Node`;

const greetingMessage = greet('Joshua');
console.log(greetingMessage);
