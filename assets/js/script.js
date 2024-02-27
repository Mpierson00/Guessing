var words = ['local', 'attributes', 'intervals', 'append', 'objects'];
var selectedWord = '';
var timeLeft = 120;
var timerID;
var wordDisplay = document.getElementById('wordToGuess');
var alphabetDisplay = document.getElementById('alphabet');
var timerDisplay = document.getElementById('timer');
var startGameButton = document.getElementById('startGame');

function initGame() {
selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
timeLeft = 120;
timerDisplay.textContent = timeLeft;
wordDisplay.innerHTML = '';
alphabetDisplay.innerHTML = '';
generateAlphabetButtons();
}