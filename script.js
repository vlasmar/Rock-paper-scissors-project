choices = ["rock", "paper", "scissors"];
let randomNumber;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(array){
    randomNumber = Math.floor(Math.random() * 3);
    return array[randomNumber];
}

function playRound(playerSelection, computerSelection){
 
    if (playerSelection == "rock" && computerSelection == "rock"){
        return "It's a tie!"
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++
        return "You lost! Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++
        return "You won! Rock beats Scissors"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++
        return "You won! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        return "It's a tie!"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++
        return "You lost! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++
        return "You lost! Rock beats Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++
        return "You won! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return "It's a tie!"
    } 
}

function game(){
    for (let i = 1; i <= 5; i++){
        let playerInput = prompt("Give a choice");
        let playerSelection = playerInput.toLowerCase();
        let computerSelection = getComputerChoice(choices);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore >= 3){
        console.log("Well done! You won! Your score: " + playerScore + " Computer's score: " + computerScore);
    } else {
        console.log(":( You lost.. Your score: " + playerScore + " Computer's score: " + computerScore);
    }
}

game()