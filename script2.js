const getInput = (id) => document.querySelector(`#${id}`).value;

const paragraph = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let borderColor = {
    r: getInput("border-r"),
    g: getInput("border-g"),
    b: getInput("border-b"),
  };
  let borderWidth = getInput("border-width");
  let backgroundColor = {
    r: getInput("background-r"),
    g: getInput("background-g"),
    b: getInput("background-b"),
  };

  paragraph.style.borderColor = `rgb(${borderColor.r}, ${borderColor.g}, ${borderColor.b})`;
  paragraph.style.borderWidth = `${borderWidth}px`;
  paragraph.style.backgroundColor = `rgb(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b})`;
});