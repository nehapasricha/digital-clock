const clock = document.querySelector(".clock");
const date = new Date();
const buttons = document.querySelectorAll("button");
let format;

setInterval(() => {
  generateTime();
}, 1000);

function generateTime() {
  format = clock.getAttribute("data-format");
  let hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  if (format == 12) {
    hour = hour > 12 ? hour % 12 : hour;
  }
  clock.innerHTML = `<h1>${hour} : ${min} :  ${sec} AM</h1>`;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    format = button.getAttribute("data-format");
    clock.setAttribute("data-format", format);
    generateTime();
  });
});
