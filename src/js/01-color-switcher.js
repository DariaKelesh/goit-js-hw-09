const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

startBtn.addEventListener("click", handleStartClick)
let timerId = null;

function handleStartClick() {
   timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
   }, 1000);
    startBtn.disabled = true;
}

stopBtn.addEventListener("click", handleStopClick)

function handleStopClick() {
    body.style.backgroundColor = clearInterval(timerId);
    startBtn.disabled = false;
}


