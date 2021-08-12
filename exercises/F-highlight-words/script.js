function highlightWords(paragraph, colours) {
  let content = document.querySelector("#content");
  let select = document.createElement("select");
  let p = document.createElement("p");
  content.appendChild(select);
  content.appendChild(p);

  colours.forEach((colour) => {
    let option = document.createElement("option");
    select.appendChild(option);
    option.innerText = colour;
    option.value = colour;
  });

  let pElements = paragraph.split(" ");
  pElements.forEach((words) => {
    let span = document.createElement("span");
    p.appendChild(span);
    span.innerText = words + " ";

    span.addEventListener("click", () => {
      markWord = select.value;

      if (markWord === "yellow") {
        span.style.backgroundColor = "yellow";
      } else if (markWord === "green") {
        span.style.backgroundColor = "green";
      } else if (markWord === "blue") {
        span.style.backgroundColor = "blue";
      }
    });
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["none", "yellow", "green", "blue"];

highlightWords(paragraph, colours);
