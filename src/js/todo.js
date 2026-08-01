import { nanoid } from "nanoid";
const todos = [];

function addTodo(text) {
  const todo = {
    id: nanoid(),
    text,
    completed: false,
  };

  todos.push(todo);
  return todos;
}

function removeTodo(id) {
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
  }

  return todos;
}

function completeTodo(id) {
    const todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
    }

    return todos;
}

export { addTodo, removeTodo, completeTodo };
