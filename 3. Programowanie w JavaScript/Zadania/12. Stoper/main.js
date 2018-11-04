let time = 0;
const display = document.querySelector(".time div");
const mainButton = document.querySelector(".main");
let isRunning = false;
let timerInterval;

function runTimer() {
    if (!isRunning) {
        timerInterval = setInterval(function () {
            time += 0.01;
            display.textContent = `${time.toFixed(2)}`;
        }, 10)
        isRunning = true;
        mainButton.textContent = "Pause";
    } else {
        clearInterval(timerInterval);
        isRunning = false;
        mainButton.textContent = "Start";
    }
}

function resetTimer() {
    if (!isRunning) {
        time = 0;
        display.textContent = "---";
    }
}

mainButton.addEventListener("click", runTimer);
document.querySelector(".reset").addEventListener("click", resetTimer);