function hello() {
  console.log('Hello everyone');
  console.log('Hope you are doing good');
  return;
  // Here the local execution context ends
  console.log('Its too hot here'); // This is skipped as we had a return in last line
}

hello();
console.log('I love icecream');
