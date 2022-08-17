const { sum } = require('./1-hello-jest');

/**
 * test(name, fn, timeout)
    * name - the test name
    * fn - function that contains the expectations to test
    * timeout [optional] - (in ms) specifies how long to wait before aborting. default - 5 ms
 */
// expect() - to check that values meet certain conditions. Comes with a matcher fn
// toBe() - a matcher fn - matcher fns let you test values in different ways
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 6 + 2 to equal 3', () => {
  expect(sum(6, 2)).toBe(8);
});

