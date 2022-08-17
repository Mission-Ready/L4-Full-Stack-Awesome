// toMatch() - checks if a string matches a regular expression.
    // https://jestjs.io/docs/expect#tomatchregexp--string
// .not - lets you test the opposite
    //https://jestjs.io/docs/expect#not
  
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
