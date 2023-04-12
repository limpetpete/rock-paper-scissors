//Create variables to hold choices
var compChoice = "Rock";
var playerChoice = "Rock";

//Ask for user's choice and assign it to playerChoice variable

//Function to generate computer's random RPS choice 
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    
    if (choice === 3) {
        compChoice = "Rock";
    } else if (choice === 2) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissors";
    }
}

getComputerChoice();
console.log(compChoice);


