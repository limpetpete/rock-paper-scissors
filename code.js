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
            compScore += 1;
        } else {
            console.log(`Boo, you win! Paper beats rock. Let's play again.`);
            playerScore += 1;
        }
    } else if (compChoice === "Scissors") {
        if (playerChoice === "Rock") {
            console.log(`Boo, you win! Rock beats scissors. Let's play again.`);
            playerScore += 1;
        } else {
            console.log(`Ha, I win! Scissors beats paper. Let's play again.`);
            compScore += 1;
        }
    } else if (compChoice === "Paper") {
        if (playerChoice === "Rock") {
            console.log(`Ha, I win! Paper beats rock. Let's play again.`);
            compScore += 1;
        } else {
            console.log(`Boo, you win! Scissors beats paper. Let's play again.`);
            playerScore += 1;
        }
    }
}

//Play a full game of RPS and then start it all again
function playRPS() {
    playerScore = 0;
    compScore = 0;
    i = 1;
    while (i < 6) {
        console.log(`Round ${i}. The score is ${playerScore}-${compScore}`);
        userSelects();
        getComputerChoice();
        whoWins(compChoice, playerChoice);
        i++;
    }
    if (compScore === playerScore) {
        console.log(`Game over. It's a draw! We both got ${compScore}`);
    } else if (compScore > playerScore) {
        console.log(`Game over. I beat you by ${compScore} to ${playerScore}.`);
    } else {
        console.log(`Game over. You beat me by ${playerScore} to ${compScore}.`);
    }
}

playRPS();