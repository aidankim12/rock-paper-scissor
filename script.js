let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

const player_stats = document.querySelector(".player");
const computer_stats = document.querySelector(".computer");
const header = document.querySelector(".header");

const player_score = document.createElement("div");
const player_selection = document.createElement("div");
const computer_score = document.createElement("div");
const computer_selection = document.createElement("div");
const result_message = document.createElement("div");
const round_number = document.createElement("h3");
round_number.setAttribute("style", "display: inline;")

player_stats.appendChild(player_score);
player_stats.appendChild(player_selection);
computer_stats.appendChild(computer_score);
computer_stats.appendChild(computer_selection);
header.appendChild(round_number);
document.body.appendChild(result_message);

player_score.textContent = `${playerScore}`;
computer_score.textContent = `${computerScore}`;
round_number.textContent = `${roundNumber}`;

function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3) + 1;
    if (numChoice === 1) {
        return "rock";
    } else if (numChoice === 2) {
        return "paper";
    } else if (numChoice === 3) {
        return "scissor";
    }
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    if (playerChoice === 'rock' && computerChoice === 'scissor' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissor' && computerChoice === 'paper') {
        ++playerScore;
        result_message.textContent = "Congratulations! You did it!";
    } else if (playerChoice === computerChoice) {
        result_message.textContent = "It's a tie! Go again!";
    } else {
        ++computerScore;
        result_message.textContent = "Aw shucks, better luck next time!";
    }
    roundNumber++;
    player_selection.textContent = `${playerChoice}`;
    computer_selection.textContent = `${computerChoice}`;
}

function updateStats() {
    player_score.textContent = `${playerScore}`;
    computer_score.textContent = `${computerScore}`;
    round_number.textContent = `${roundNumber}`;
    return;
}

function gameOver() {
    if (roundNumber === 5) {
        const stats = document.querySelector(".stats");
        const game_message = document.createElement("div");
        const play_again = document.createElement("button");
        result_message.remove();
        if (playerScore > computerScore) {
            game_message.textContent = "YOU WIN!";
        } else if (playerScore < computerScore) {
            game_message.textContent = "YOU LOSE!";
        } else {
            game_message.textContent = "IT'S A TIE!";
        }
        play_again.textContent = "Play again?";
        play_again.addEventListener("click", () => {
            playerScore = 0;
            computerScore = 0;
            roundNumber = 0;
            updateStats();
            player_selection.textContent = ``;
            computer_selection.textContent = ``;
            game_message.remove();
            play_again.remove();
        });

        document.body.appendChild(game_message);
        document.body.appendChild(play_again);
    }
}

const btn = document.querySelectorAll("button");

btn.forEach((option) => {
    option.addEventListener("click", ()=> {
        playRound(option.className);
        updateStats();
        gameOver();
    });
});