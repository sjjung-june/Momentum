const ToDoForm = document.querySelector(".ToDo-form");
const ToDoInput = document.querySelector(".ToDo-form input");
const ToDoList = document.querySelector(".ToDo-list");
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);
let ToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}

function handleToDoRemove(event) {
  const li = event.target.parentElement;
  li.remove();
  ToDos = ToDos.filter((item) => String(item.id) !== li.id);
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", handleToDoRemove);

  li.appendChild(span);
  li.appendChild(button);
  ToDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = ToDoInput.value;
  ToDoInput.value = "";
  const newToDoObj = { text: newToDo, id: Date.now() };
  ToDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

ToDoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  ToDos = parsedToDos;
  parsedToDos.forEach((item) => paintToDo(item));
}
