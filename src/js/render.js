export function renderTodos(todos) {
  const list = document.querySelector(`.todo-list`);

  list.innerHTML = "";

  todos.forEach((todo) => {
    const todoItemLi = document.createElement("li");
    todoItemLi.classList.add("todo-item");
    todoItemLi.dataset.id = todo.id;
    todoItemLi.classList.toggle("completed", todo.completed);

    const todoTextSpan = document.createElement("span");
    todoTextSpan.classList.add("todo-text");
    todoTextSpan.textContent = todo.text;

    const todoActionsDiv = document.createElement("div");
    todoActionsDiv.classList.add("todo-actions");

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = todo.completed ? "↩" : "✔";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "✖";

    todoActionsDiv.append(completeBtn, deleteBtn);
    todoItemLi.append(todoTextSpan, todoActionsDiv);
    list.append(todoItemLi);
  });
}
