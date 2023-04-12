//Create variables to hold choices
var compChoice = "rock";
var playerChoice = "rock";

//Ask for user's choice and assign it to playerChoice variable
function userSelects() {
playerChoice = prompt("Let's play Rock Paper Scissors. Which do you choose?", "").toLowerCase();
}

//Function to generate computer's random RPS choice 
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1; 
    if (choice === 3) {
        compChoice = "rock";
    } else if (choice === 2) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
}

getComputerChoice();
console.log(compChoice);
console.log(playerChoice);

//Capitalise first letter of player choice
function capitaliseChoice(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Compare player choice against computer choice and announce who the winner is
function whoWins(compChoice, playerChoice) {
    compChoice = capitaliseChoice(compChoice);
    playerChoice = capitaliseChoice(playerChoice);
    if (compChoice === playerChoice) {
        console.log(`We both chose ${compChoice} It's a draw. Choose again!`);
    } else if (compChoice === "Rock") {
        if (playerChoice === "Scissors") {
            console.log(`Ha, I win! Rock beats scissors. Let's play again.`);
        } else {
            console.log(`Boo, you win! Paper beats rock. Let's play again.`);
        }
    } else if (compChoice === "Scissors") {
        if (playerChoice === "Rock") {
            console.log(`Boo, you win! Rock beats scissors. Let's play again.`);
        } else {
            console.log(`Ha, I win! Scissors beats paper. Let's play again.`);
        }
    } else if (compChoice === "Paper") {
        if (playerChoice === "Rock") {
            console.log(`Ha, I win! Paper beats rock. Let's play again.`);
        } else {
            console.log(`Boo, you win! Scissors beats paper. Let's play again.`);
        }
    }
}

//Play a full game of RPS and then start it all again
function playRPS() {
    userSelects();
    getComputerChoice();
    whoWins(compChoice, playerChoice);
    playRPS();
}

playRPS();