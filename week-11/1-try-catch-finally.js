// 1. Without any exception - try & finally runs
try {
  console.log(5 + 2);
} catch (e) {
  console.log('Caught an error.', e);
  console.log('This is after printing the error');
} finally {
  console.log('Thank you for using the program');
}

// Runtime error which is NOT handled.
// Causes program to stop
console.log('After the try finally');


// 2. WITH an exception - try, catch & finally runs
try {
  console.log(a);
  console.log('This is in try block, but skipped due to an earlier exception'); // skipped
} catch (e) {
  console.log('Caught an error.', e);
  console.log('This is after printing the error');
} finally {
  console.log('Thank you for using the program');
}

// Runtime error which is handled does not causes program to stop
// console.log(a);
console.log('After the try catch finally');

