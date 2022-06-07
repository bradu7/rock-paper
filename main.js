console.log("Hello World");



var computerChoice = document.getElementById('computer-choice');
var yourChoice = document.getElementById('your-choice');
var result = document.getElementById('result')
var possibleChoices = document.querySelectorAll('img');
var youChoose
var computerChoose
var results
var computerScore = document.querySelector('[computer-score]')
var yourScore = document.querySelector('[your-score]')
var gameReset = document.getElementById('resetGame')


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', function (event) {
    youChoose = event.target.id
    yourChoice.innerHTML = "Your Choice: " + youChoose
    generateComputerChoice()
    gameResult()
    if (results === "Result: You won") {
        incrementScore(yourScore)
    }
    if (results === "Result: Computer won") {
        incrementScore(computerScore);
    }
    resetOnClick()

}));

function generateComputerChoice() {
    var randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 0) {
        computerChoose = "rock"
    } else if (randomNumber === 1) {
        computerChoose = "paper"
    } else if (randomNumber === 2) {
        computerChoose = "scissors"
    }
    computerChoice.innerHTML = "Computer's Choice: " + computerChoose
}


function gameResult() {
    if (computerChoose === youChoose) {
        results = "Result: It's a tie"
    } else if (computerChoose === 'rock' && youChoose === 'paper') {
        results = "Result: You won"
    } else if (computerChoose === 'rock' && youChoose === 'scissors') {
        results = "Result: Computer won"
    } else if (computerChoose === 'paper' && youChoose === 'rock') {
        results = "Result: Computer won"
    } else if (computerChoose === 'paper' && youChoose === 'scissors') {
        results = "Result: You won"
    } else if (computerChoose === 'scissors' && youChoose === 'paper') {
        results = "Result: Computer won"
    } else if (computerChoose === 'scissors' && youChoose === 'rock') {
        results = "Result: You won"
    }

    result.innerHTML = results
};


function incrementScore(scoreCounter) {
    scoreCounter.innerText = parseInt(scoreCounter.innerText) + 1
}

function resetOnClick() {
    gameReset.addEventListener("click", function () {
        yourScore.innerText = 0
        computerScore.innerText = 0
        computerChoice.innerHTML = "Computer's Choice: "
        yourChoice.innerHTML = "Your Choice: "
        result.innerHTML = "Result: "

    });
}