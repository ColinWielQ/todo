const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let key;

function addTodoToDOM(todo) {
  const li = document.createElement('li');
  li.textContent = todo;
  todoList.appendChild(li);
}

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = '';
  addTodo(todo, 'Test user', key);
  addTodoToDOM(todo);
});

key = createUser('Test user', 'password');