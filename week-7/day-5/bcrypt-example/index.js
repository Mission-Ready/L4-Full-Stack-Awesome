const bcrypt = require('bcrypt');

const password = 'pass'
const hash =  bcrypt.hashSync(password, 10) // use hashSync() instead of hash()
console.log(hash)

const hashedPass = '$2b$10$ZBRyh9Es3lemvanRaaUX0uHwHMsJ8S5USxyb.Je45XsDWEooBW2I2'
const isCorrectPassword = bcrypt.compareSync(password, hashedPass)
console.log(isCorrectPassword)