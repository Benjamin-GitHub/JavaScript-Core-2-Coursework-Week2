function shoppingList(arrayOfShopping) {
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");

  arrayOfShopping.forEach((perItem) => {
    let li = document.createElement("li");

    content.appendChild(ul);
    ul.appendChild(li);
    
    li.innerText = perItem;
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
