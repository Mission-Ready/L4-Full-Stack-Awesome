try {
  console.log(a);
} catch (e) {
  console.log('Caught an error.', e);
  console.log('This is after printing the error');
}

// Runtime error which is NOT handled.
// Causes program to stop
// console.log(a); 
console.log('After the try catch');
