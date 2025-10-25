let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const genCompChoice = () => {
    const options = ['paper', 'scissor', 'rock'];
   const ranidx = Math.floor(Math.random() * 3);
   return options[ranidx];
};

const drawGame = () => {
    console.log("draw");
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#00cfff";
};

const showWinner = (userWin) => {
    if (userWin) {
        playerScore++;
        playerScoreDisplay.innerText = playerScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScoreDisplay.innerText = computerScore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "#ff0000";
    }
};

const playGame = (playerChoice) => {
    console.log("player choice", playerChoice);
    const computerChoice = genCompChoice();
    console.log("computer choice", computerChoice);

    if(playerChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (playerChoice === 'rock') {
            userWin = computerChoice === 'scissor';
        } else if (playerChoice === 'paper') {
            userWin = computerChoice === 'rock';
        } else if (playerChoice === 'scissor') {
            userWin = computerChoice === 'paper';
        }
        showWinner(userWin, computerChoice, playerChoice);
    } 
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute('id');
        playGame(playerChoice);
    });
});