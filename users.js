let users = [];

function createUser(name, password) {
  const user = { name, password, key: Math.random().toString(36).substring(2) };
  users.push(user);
  return user.key;
}

function authenticate(name, key) {
  const user = users.find(user => user.name === name);
  return user && user.key === key;
}

module.exports = { createUser, authenticate };