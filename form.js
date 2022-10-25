const inputs = document.querySelectorAll("input");
const names = document.querySelectorAll(".name");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const firstPassword = document.querySelector("#password1");
const emailInput = document.querySelector("#email");
const firstPasswordMessage = document.querySelector(".password1-message");
const secondPassword = document.querySelector("#password2");
const secondPasswordMessage = document.querySelector(".password2-message");
const button = document.querySelector(".btn");
const passwordPattern = /.{8,35}/;

const passwords = function () {
  // First Password Validation
  firstPassword.addEventListener("keyup", () => {
    if (!passwordPattern.test(firstPassword.value)) {
      firstPasswordMessage.classList.remove("p1-message");
    } else {
      firstPasswordMessage.classList.add("p1-message");
      localStorage.setItem("First Password", firstPassword.value);
      let passwordOne;
    }
  });

  // Second Password Validation
  secondPassword.addEventListener("keyup", () => {
    if (secondPassword.value !== firstPassword.value) {
      secondPasswordMessage.classList.remove("p1-message");
    } else {
      secondPasswordMessage.classList.add("p1-message");
    }
    localStorage.setItem("Second Password", secondPassword.value);
    let passwordTwo;
  });
};

passwords();

button.addEventListener("click", (e) => {
  e.preventDefault();
  let first;
  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("fault");
    }

    input.addEventListener("keyup", () => {
      if (input.value.length >= 2) {
        input.classList.remove("fault");
      } else {
        input.classList.add("fault");
      }
    });
  });

  passwordOne = localStorage.getItem("First Password");
  passwordTwo = localStorage.getItem("Second Password");

  if (firstPassword.value && secondPassword.value && firstNameInput.value && lastNameInput.value && emailInput.value) {
    document.querySelector(".popup-wrapper").style.display = "block";
  }
});
