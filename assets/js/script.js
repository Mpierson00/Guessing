var words = ['local', 'attributes', 'intervals', 'append', 'objects'];
var selectedWord = '';
var timeLeft = 120;
var timerID;
var wordDisplay = document.getElementById('wordToGuess');
var alphabetDisplay = document.getElementById('alphabet');
var timerDisplay = document.getElementById('timer');
var startGameButton = document.getElementById('startGame');

function initGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    timeLeft = 120;
    timerDisplay.textContent = timeLeft;
    wordDisplay.innerHTML = '';
    alphabetDisplay.innerHTML = '';
    generateAlphabetButtons();
}

function startTimer() {
    clearInterval(timerID);
    timerID = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerID);
            alert('time\'s up! You lose');
            initGame();
        }
    }, 1000);
}