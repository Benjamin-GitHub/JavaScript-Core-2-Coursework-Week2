function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((people) => {
    let name = document.createElement("h1");
    let job = document.createElement("h2");
    
    content.appendChild(name);
    content.appendChild(job);
    
    name.innerText = `Name : ${people.name}`;
    job.innerText = `Job : ${people.job}`;
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
