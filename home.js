let start = document.getElementById("startButton");
let stop = document.getElementById("stopButton");
let reset = document.getElementById("resetButton");
let shortbreak = document.getElementById("shortBreak");
let longbreak = document.getElementById("longBreak");
let timerDisplay = document.getElementById("timerDisplay");



let timerInterval;
let timeLeft = 25 * 60;


function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timeLeft = 25 * 60;
    updateDisplay();
}

function setShortBreak() {
    stopTimer();
    timeLeft = 5 * 60;
    updateDisplay();
}

function setLongBreak() {
    stopTimer();
    timeLeft = 15 * 60;
    updateDisplay();
}

let start = document.getElementById("startButton");
let stop = document.getElementById("stopButton");
let reset = document.getElementById("resetButton");
let shortbreak = document.getElementById("shortBreak");
let longbreak = document.getElementById("longBreak");
let timerDisplay = document.getElementById("timerDisplay");



let timerInterval;
let timeLeft = 25 * 60;


function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timeLeft = 25 * 60;
    updateDisplay();
}

function setShortBreak() {
    stopTimer();
    timeLeft = 5 * 60;
    updateDisplay();
}

function setLongBreak() {
    stopTimer();
    timeLeft = 15 * 60;
    updateDisplay();
}
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
shortbreak.addEventListener("click", setShortBreak);
longbreak.addEventListener("click", setLongBreak);




updateDisplay();



updateDisplay();
