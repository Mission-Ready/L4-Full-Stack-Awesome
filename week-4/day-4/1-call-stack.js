function first() {
  const a = 4,
    b = 3;
  console.log('Line 1');
  console.log('Line 2');
  second();
  console.log('I am the last line in the first function', a, b);
  console.log('Variables in the global context', someGlobalvar);
}

function second() {
  const b = 14,
    c = 23;
  console.log('Line 1');
  console.log('Line 2');
  console.log('Last Line in the second fn', b, c);
  console.log('Variables in the global context', someGlobalvar);
}

function boss() {
  first();
}

const someGlobalvar = 10;
boss(); // call the boss function
console.log('Everything has been completed.');
console.log('a, b, c', a, b, c);
