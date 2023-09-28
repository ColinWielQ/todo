const { createUser, authenticate } = require('./users');

const key = createUser('Test user', 'password');
console.log(authenticate('Test user', key));
console.log(authenticate('Test user', 'fake key'));