function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;
const DELAY_MS = 1000;
const date = new Date();

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        console.log(`I love async JS!  ${Date.now() / 1000}`);
        document.body.style.backgroundColor = getRandomHexColor();
    }, DELAY_MS);
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    console.log(`Interval with id ${timerId} has stopped!`);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', '');
});
