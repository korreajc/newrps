function computerPlay(){
    let gameChoices = ["rock", "paper", "scissors"];
    
    const compChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];

    return compChoice;
}

function playRound(playerSelection, computerSelection){
    let outcomeMarker;
    if(playerSelection == "rock" && computerSelection == "rock"){
        console.log("Tie! Rock ties with rock.")
        outcomeMarker = 1;
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose. paper beats rock.")
        outcomeMarker = 0;
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats scissors.")
        outcomeMarker = 2;
    }else if(playerSelection == "paper" && computerSelection == "paper"){
        console.log("Tie. Paper ties with paper.")
        outcomeMarker = 1;
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats rock.")
        outcomeMarker = 2;
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You lose. Scissors beats paper.")
        outcomeMarker = 0;
    }else if(playerSelection == "scissors" && computerSelection == "scissors"){
        console.log("Tie! Scissors ties with scissors.")
        outcomeMarker = 1;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose. Rock beats scissors.")
        outcomeMarker = 0;
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win. Scissors beats paper.")
        outcomeMarker = 2;
    }

    return outcomeMarker;
}

function playerChoiceRock(){
    compChoice = computerPlay();
    const outcome = playRound("rock", compChoice);
    if(outcome == 0){
        let marker = document.getElementById("compScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("compScoreNum").innerHTML = marker;
    }else if(outcome == 2){
        let marker = document.getElementById("playerScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("playerScoreNum").innerHTML = marker;
    }
}

function playerChoicePaper(){
    compChoice = computerPlay();
    const outcome = playRound("paper", compChoice);
    if(outcome == 0){
        let marker = document.getElementById("compScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("compScoreNum").innerHTML = marker;
    }else if(outcome == 2){
        let marker = document.getElementById("playerScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("playerScoreNum").innerHTML = marker;
    }
}

function playerChoiceScissors(){
    compChoice = computerPlay();
    const outcome = playRound("scissors", compChoice);
    if(outcome == 0){
        let marker = document.getElementById("compScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("compScoreNum").innerHTML = marker;
    }else if(outcome == 2){
        let marker = document.getElementById("playerScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("playerScoreNum").innerHTML = marker;
    }
}

document.getElementById("rockButton").onclick = playerChoiceRock;
document.getElementById("paperButton").onclick = playerChoicePaper;
document.getElementById("scissorsButton").onclick = playerChoiceScissors;



