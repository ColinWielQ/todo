const { addTodo, updateTodo, deleteTodo, viewTodos } = require('./todo');

let todos = addTodo('Test item');
console.log(todos);

todos = updateTodo(0, 'Updated test item');
console.log(todos);

todos = deleteTodo(0);
console.log(todos);

todos = viewTodos();
console.log(todos);