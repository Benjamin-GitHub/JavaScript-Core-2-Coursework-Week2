function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach(addTodo);
}

function addTodo(todo) {
  let li = document.createElement("li");
  let list = document.querySelector("#todo-list");
  li.innerText = todo.task;
  list.appendChild(li);
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  let span = document.createElement("span");
  li.appendChild(span);
  span.className = "badge bg-primary rounded-pill";
  let i = document.createElement("i");
  i.className = "fa fa-check";
  span.appendChild(i);
  let iTrash = document.createElement("i");
  iTrash.className = "fa fa-trash";
  span.appendChild(iTrash);

  i.addEventListener("click", () => {
    if (li.style.textDecoration === "none") {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  iTrash.addEventListener("click", () => {
    list.removeChild(li);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let todoInput = document.querySelector("#todoInput");

  if (todoInput.value.length != 0) {
    let newTodo = { task: todoInput.value, completed: false };
    addTodo(newTodo);
    todos.push(newTodo.value);
    todoInput.value = "";
  } else alert("You should write some Task before adding!!");
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  let liItems = document.querySelectorAll("li");
  let list = document.querySelector("#todo-list");

  liItems.forEach((li) => {
    if (li.style.textDecoration === "line-through") {
      list.removeChild(li);
    }
  });
}
