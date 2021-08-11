function listOfColours(colours) {
  let content = document.querySelector("#content");
  let select = document.createElement("select");
  content.appendChild(select);
  let p = document.createElement("p");
  content.appendChild(p);

  colours.forEach((colour) => {
    let option = document.createElement("option");
    select.appendChild(option);
    option.textContent = colour;
    option.style.color = colour;

    select.addEventListener("click", () => {
      p.innerText = select.value;
      p.style.color = select.value;
    });
    
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
