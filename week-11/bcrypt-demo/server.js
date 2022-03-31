const bcrypt = require('bcrypt');

const password = 'You great password';
// Hash the string given above to get a hash value
const hash = bcrypt.hashSync(password, 10); // use hashSync() instead of hash()
console.log(hash)

const hashedPass =
  '$2b$10$vPzkK..UrB4UCAilByDP1upkaJfCHnWojl7dORP92m7NnFOjrZml.';
// Comparing the hash value to a new input the user provides.
const isCorrectPassword = bcrypt.compareSync(password, hashedPass);
console.log(isCorrectPassword);
