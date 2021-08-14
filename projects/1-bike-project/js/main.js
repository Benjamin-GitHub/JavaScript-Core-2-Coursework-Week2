function theme() {
  let jumbotron = document.querySelector(".jumbotron");
  let btnDonate = document.querySelector(".btn-donate");
  let btnVolunteer = document.querySelector(".btn-volunteer");

  let blueBtn = document.querySelector("#blueBtn");
  let orangeBtn = document.querySelector("#orangeBtn");
  let greenBtn = document.querySelector("#greenBtn");

  blueBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#588fbd";
    btnDonate.style.backgroundColor = "#ffa500";
    btnVolunteer.style.backgroundColor = "black";
    btnVolunteer.style.color = "white";
  });

  orangeBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#f0ad4e";
    btnDonate.style.backgroundColor = "#5751fd";
    btnVolunteer.style.backgroundColor = "#31b0d5";
    btnVolunteer.style.color = "white";
  });

  greenBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#87ca8a";
    btnDonate.style.backgroundColor = "black";
    btnVolunteer.style.backgroundColor = "8c9c08";
  });
}

theme();

function validation() {
  let emailValidity = document.querySelector("#exampleInputEmail1");
  let nameValidity = document.querySelector("#example-text-input");
  let describeValidity = document.querySelector("#exampleTextarea");

  let submitBtn = document.querySelector('button[type="submit"]');

  submitBtn.addEventListener("click", (event) => {
    if (nameValidity.value === "") {
      nameValidity.style.backgroundColor = "#EE8C87";
      alert("Please input your name!");
    } else if (
      emailValidity.value === "" ||
      !emailValidity.value.includes("@")
    ) {
      emailValidity.style.backgroundColor = "#EE8C87";
      alert("Please include an @ sign in the Email address!")
    } else if (describeValidity.value === "") {
      describeValidity.style.backgroundColor = "#EE8C87";
      alert("Please say something about yourself!")
    } else if (
      nameValidity.value.length > 0 &&
      emailValidity.value.length > 0 &&
      emailValidity.value.includes("@") &&
      describeValidity.value.length > 0
    ) {
      alert("Thank you for filling out the form!");
      nameValidity = "";
      emailValidity = "";
      describeValidity = "";
      nameValidity.style.backgroundColor = "#fff";
      emailValidity.style.backgroundColor = "#fff";
      describeValidity.style.backgroundColor = "#fff";
    }

    event.preventDefault();
  });
}

validation();
