function todoList(todos) {
  let content = document.querySelector("#content");

  let ul = document.createElement("ul");
  content.appendChild(ul);
  // ul.style.display = "flex";
  ul.style.flexDirection = "column";

  todos.forEach((items) => {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.style.display = "flex";
    li.style.padding = "10px";
    li.innerText = items.todo;

    li.addEventListener("click", () => {
      if ((li.style.textDecoration = "none")) {
        li.style.textDecoration = "line-through";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
