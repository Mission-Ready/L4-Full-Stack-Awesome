const dotenv = require("dotenv"); // importing .env library
dotenv.config(); // Load any .env files present


console.log('NUMBER_OF_PROCESSORS is', process.env.NUMBER_OF_PROCESSORS);
console.log("PASSWORD", process.env.PASSWORD);
console.log("USER_NAME", process.env.USER_NAME);