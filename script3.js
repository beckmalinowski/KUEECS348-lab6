const getInput = (id) => document.querySelector(`#${id}`).value;

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let passwords = {
    first: getInput("password-one"),
    second: getInput("password-two"),
  };

  if (passwords.first.length < 8) {
    alert("your first password is less than eight characters.");
  } else if (passwords.second.length < 8) {
    alert("your second password is less than eight characters.");
  } else if (passwords.first != passwords.second) {
    alert("your passwords do not match.");
  } else {
    alert("your passwords match!");
  }
});