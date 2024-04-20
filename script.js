const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const roundResult = document.querySelector("#round-result");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const finalResult = document.querySelector("#final-result");

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
    if (playerScore.textContent==="5" || computerScore.textContent==="5"){
        displayResult();
        return;
    } 
    playRound("rock");
})
paperBtn.addEventListener("click", ()=>{
    if (playerScore.textContent==="5" || computerScore.textContent==="5"){
        displayResult();
        return;
    } 
    playRound("paper");
})
scissorsBtn.addEventListener("click", ()=>{
    if (playerScore.textContent==="5" || computerScore.textContent==="5"){
        displayResult();
        return;
    } 
    playRound("scissors");
})

// need to be implemented such that if anyone reaches score 5, its over

function displayResult(){
    if (Number(playerScore.textContent) > Number(computerScore.textContent)){
        finalResult.textContent = "You are the Winner!";
    }
    else{
        if (Number(playerScore.textContent) < Number(computerScore.textContent)){
            finalResult.textContent = "You lost!";
        }
        else{
            finalResult.textContent = "Tie!";
        }
    }
}










//New UI feature

// HTML reference Nodes
















