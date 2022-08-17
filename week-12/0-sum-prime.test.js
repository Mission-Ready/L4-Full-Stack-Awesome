const { sum, checkIfPrime } = require('./app');

// Test case 1 - sum()
const test1Sum = sum(1, 2) === 3;
console.log(
  'Test case 1:',
  test1Sum ? 'Test 1 passed' : 'Test 1 failed'
);

// Test case 2 - sum()
const test2Sum = sum(0, 1) === 1;
console.log(
  'Test case 2:',
  test2Sum ? 'Test 2 passed' : 'Test 2 failed'
);

// Test case 3 - sum()
const test3Sum = sum(0, -1) === -1;
console.log(
  'Test case 3:',
  test3Sum ? 'Test 3 passed' : 'Test 3 failed'
);

// Test case 4 - sum()
const test4Sum = sum(0.1, 0.2) === 0.3;
console.log(
  'Test case 4:',
  test4Sum ? 'Test 4 passed' : 'Test 4 failed'
);

// Test case 1 - Prime()
console.log(
  'Test case 1:',
  checkIfPrime(1) === false ? 'Test 1 passed' : 'Test 1 failed'
);

// Test case 2 - Prime()
console.log(
  'Test case 2:',
  checkIfPrime(2) === true ? 'Test 2 passed' : 'Test 2 failed'
);

// Test case 3 - Prime()
console.log(
  'Test case 3:',
  checkIfPrime(3) === true ? 'Test 3 passed' : 'Test 3 failed'
);

// Test case 4 - Prime()
console.log(
  'Test case 4:',
  checkIfPrime(13) === true ? 'Test 4 passed' : 'Test 4 failed'
);

// Test case 5 - Prime()
console.log(
  'Test case 5:',
  checkIfPrime(12) === false ? 'Test 5 passed' : 'Test 5 failed'
);

