const myBeverage = {
  delicious: true,
  sour: false,
};

// describe(name, fn) - Creates block that groups together several related tests
// Group of tests is called ==> Test suite

// toBeTruthy() & toBeFalsy() => checks if the value is true/false.
// falsey values => false, 0, '', null, undefined, and NaN

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });

  // nested test group
  describe('math tests', () => {
    test('sum of 1 & 2', () => {
      expect(1 + 2).toBe(3);
    });  
  });
});

// npm test -- -t 'my beverage' to just run that group of tests.
