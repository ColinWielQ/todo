const { addTodo, updateTodo, deleteTodo, viewTodos } = require('./todo');
const { createUser } = require('./users');

const key = createUser('Test user', 'password');
console.log(addTodo('Test item', 'Test user', key));
console.log(updateTodo(0, 'Updated test item', 'Test user', key));
console.log(deleteTodo(0, 'Test user', key));
console.log(viewTodos('Test user', key));
console.log(addTodo('Test item', 'Test user', 'fake key'));