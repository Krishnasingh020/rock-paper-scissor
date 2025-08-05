const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const winDisplay = document.getElementById('wins');
const loseDisplay = document.getElementById('loses');


const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let wincount = 0;
let losecount = 0; 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChooice();
    getResult();
    WinScore();
    LoseScore();
}))


function generateComputerChooice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';

    }
    if (randomNumber === 3) {
        computerChoice = 'scissor';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}


function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!';
    }
    if( computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!';
    }
    if( computerChoice === 'rock' && userChoice === 'scissor'){
        result = 'You lost!';
    }
    if( computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost!';
    }
    if( computerChoice === 'paper' && userChoice === 'scissor'){
        result = 'You Win!';
    }
    if( computerChoice === 'scissor' && userChoice === 'rock') {
        result = 'You Win!';
    }
    if( computerChoice === 'scissor' && userChoice === 'paper') {
        result = 'You lost!';
    }
    resultDisplay.innerHTML = result;

}

function WinScore() {
    if (result === 'You Win!'){
        wincount++;
        winDisplay.innerHTML = wincount;
    }
}

function LoseScore() {
    if (result === 'You lost!') {
        losecount++;
        loseDisplay.innerHTML = losecount;
    }
}

