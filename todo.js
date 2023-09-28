const { authenticate } = require('./users');

let todos = [];

function addTodo(item, name, key) {
  if (!authenticate(name, key)) return 'Not authenticated';
  todos.push(item);
  return todos;
}

function updateTodo(index, newItem, name, key) {
  if (!authenticate(name, key)) return 'Not authenticated';
  todos[index] = newItem;
  return todos;
}

function deleteTodo(index, name, key) {
  if (!authenticate(name, key)) return 'Not authenticated';
  todos.splice(index, 1);
  return todos;
}

function viewTodos(name, key) {
  if (!authenticate(name, key)) return 'Not authenticated';
  return todos;
}

module.exports = { addTodo, updateTodo, deleteTodo, viewTodos };