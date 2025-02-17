console.log("Jeg er i GuessNumber.js")

const lblMessage = document.querySelector(".message");
console.log(lblMessage);
console.log(lblMessage.textContent);

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);

const inpGuess = document.querySelector(".guess")
console.log(inpGuess.value)

const secretNumber = Math.trunc(Math.random()*20)+1;
lblNumber.textContent= secretNumber;

const guessButton = document.querySelector(".btn.check")

function youWin() {

}
function lowerScore() {
    const newScore = Number(lblScore.textContent)-1;
    lblScore.textContent = newScore;
    if (newScore <= 0) {
        lblMessage.textContent = "Lives depleted. Please press F5 for a new number to guess and a new set of lives!"
        guessButton.removeEventListener('click', testNumber)
    }
}

function testNumber() {
    console.log("testNumber");
    let guess = inpGuess.value;
    console.log(guess);
    if (!guess) {
        lblMessage.textContent = "Forkert tal"
        lowerScore()
    } else if (guess == secretNumber) {
        lblMessage.textContent="?? Du har gættet tallet";
        youWin();
    } else if (guess > secretNumber) {
        lblMessage.textContent="Too high";
        lowerScore()
    } else if (guess < secretNumber) {
        lblMessage.textContent ="Too low";
        lowerScore()
    }
}
guessButton.addEventListener("click", testNumber)