function readingList(books) {
  let content = document.querySelector("#content");

  let h1 = document.createElement("h1");
  content.appendChild(h1);
  h1.innerText = "Book List";

  let ul = document.createElement("ul");
  content.appendChild(ul);
  ul.style.display = "flex";
  ul.style.flexWrap = "wrap";
  ul.style.alignItems = "column";
  ul.style.listStyleType = "none";

  books.forEach((bookDetails) => {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.style.padding = "30px";
    li.style.margin = "20px";
    li.style.justifyContent = "space-between";

    let p = document.createElement("p");
    li.appendChild(p);
    p.innerText = `${bookDetails.title} - ${bookDetails.author}`;

    let image = document.createElement("img");
    li.appendChild(image);
    image.src = bookDetails.bookCover;
    image.style.maxHeight = "270px";
    image.style.maxWidth = "180px";

    if (bookDetails.alreadyRead) {
      li.style.backgroundColor = "green";
    } else li.style.backgroundColor = "red";
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCover: "./image/The-Design-of-Everyday-Things-coverbook.png",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCover: "./image/The-Most-Human-Human-coverbook.png",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCover: "./image/The-Pragmatic-Programmer-coverbook.png",
  },
];

readingList(books);
