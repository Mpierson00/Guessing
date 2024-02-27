var words = ['local', 'attributes', 'intervals', 'append', 'objects'];
var selectedWord = '';
var timeLeft = 120;
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
    startTimer();
    displayWord();
    generateAlphabetButtons();
}

function startTimer() {
   var timerID = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerID);
            alert('time\'s up! You lose');
        }
    }, 1000);
}

startGameButton.addEventListener('click', initGame);