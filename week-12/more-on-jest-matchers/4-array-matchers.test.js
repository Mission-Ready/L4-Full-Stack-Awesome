const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

//  toContain - check that an item is in an array. uses ===
// https://jestjs.io/docs/expect#tocontainitem
test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
});
