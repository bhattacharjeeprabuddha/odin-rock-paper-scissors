const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const roundResult = document.querySelector("#round-result");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const finalResult = document.querySelector("#final-score");

function getComputerChoice(){
    choicesArray = ["rock", "paper", "scissors"];
    i = Math.floor(Math.random()*3);
    return choicesArray[i];
}

function playerScoreUp(){
    playerScore.textContent = Number(playerScore.textContent) + 1;
}

function computerScoreUp(){
    computerScore.textContent = Number(computerScore.textContent) + 1;
}


function playRound(playerSelection){
    let player = playerSelection.toLowerCase();
    let computer = getComputerChoice();

    if (player === "rock"){
        if (computer === "rock"){
            roundResult.textContent = "Tie!";
        }
        if (computer === "scissors"){
            roundResult.textContent = "You Win! Rock beats Scissor";
            playerScoreUp();
        }
        if (computer === "paper"){
            roundResult.textContent = "You Lose! Paper beats Rock";
            computerScoreUp();
        }
        return;
    }


    if (player === "paper"){
        if (computer === "rock"){
            roundResult.textContent = "You Win! Paper beats Rock";
            playerScoreUp();

        }
        if (computer === "scissors"){
            roundResult.textContent = "You Lose! Scissor beats Paper";
            computerScoreUp();
        }
        if (computer === "paper"){
            roundResult.textContent = "Tie!";
        }
    }

    if (player === "scissors"){
        if (computer === "scissors"){
            roundResult.textContent = "Tie!";
        }
        if (computer === "rock"){
            roundResult.textContent = "You Lose! Rock beats Scissors";
            computerScoreUp();
        }
        if (computer === "paper"){
            roundResult.textContent = "You Win! Scissors beats Paper";
            playerScoreUp();
        }
    }
}  


rockBtn.addEventListener("click", ()=>{
    playRound("rock");
})
paperBtn.addEventListener("click", ()=>{
    playRound("paper");
})
scissorsBtn.addEventListener("click", ()=>{
    playRound("scissors");
})

    
if (Number(playerScore) > Number(computerScore)){
    finalResult.textContent = "Final result: You are the Winner!";
}
else{
    if (Number(playerScore) < Number(computerScore)){
        finalResult.textContent = "Final result: You lost!";
    }
    else{
        finalResult.textContent = "Final result: Tie!";
    }
}













//New UI feature

// HTML reference Nodes
















