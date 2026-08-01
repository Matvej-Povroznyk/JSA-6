import { addTodo, removeTodo, completeTodo } from "./todo";
import { renderTodos } from "./render";

const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(`.todo-input`);

const addBtn = document.querySelector(`.add-btn`);

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = todoInput.value.trim();
  if (!text) return;

  const todos = addTodo(text);
  renderTodos(todos);

  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.closest(".todo-item").dataset.id;

    const todos = removeTodo(id);
    renderTodos(todos);
  } else if (e.target.classList.contains("complete-btn")) {
    const id = e.target.closest(".todo-item").dataset.id;
    const todos = completeTodo(id);
    todos.sort((a, b) => a.completed - b.completed);
    renderTodos(todos);
  }
});
