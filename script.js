function getComputerChoice(){
    choicesArray = ["rock", "paper", "scissors"];
    i = Math.floor(Math.random()*2);
    return choicesArray[i]
}

function playRound(playerSelection){
    const player = playerSelection.toLowerCase();
    const computer = getComputerChoice();

    if (player === "rock"){
        if (computer === "rock"){
            return "Tie!";
        }
        if (computer === "scissor"){
            return "You Win! Rock beats Scissor";
        }
        if (computer === "paper"){
            return "You Lose! Paper beats Rock";
        }
    }

    if (player === "paper"){
        if (computer === "rock"){
            return "You Win! Paper beats Rock";
        }
        if (computer === "scissor"){
            return "You Lose! Scissor beats Paper";
        }
        if (computer === "paper"){
            return "Tie!";
        }
    }

    if (player === "scissor"){
        if (computer === "scissor"){
            return "Tie!";
        }
        if (computer === "rock"){
            return "You Lose! Rock beats Scissor";
        }
        if (computer === "paper"){
            return "You Win! Scissor beats Paper";
        }
    }





}  

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let player = prompt("player input: ");
        let computer = getComputerChoice();
        let result = playRound(player, computer);
        console.log(result)
        if (result.includes("Win!")){
            playerScore += 1;
        }
        else{
            if (result.includes("Lose!")){
                computerScore += 1;
            }
            else{
                continue;
            }
        }

    }
    if (playerScore > computerScore){
        console.log("Final result: You are the Winner!")
    }
    else{
        if (playerScore < computerScore){
            console.log("Final result: You lost!")
        }
        else{
            console.log("Final result: Tie!")
        }
    }
}

playGame()


















