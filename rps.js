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

function changeCompImg(image){
    if(image == "paper"){
        document.getElementById("compChoice").src = "paper.png";
    }else if(image == "rock"){
        document.getElementById("compChoice").src = "rock.png";
    }else if(image == "scissors"){
        document.getElementById("compChoice").src = "scissors.jpeg";
    }
}

function playerChoiceRock(){
    compChoice = computerPlay();
    changeCompImg(compChoice);
    const outcome = playRound("rock", compChoice);
    document.getElementById("playerChoice").src = "rock.png";
    if(outcome == 0){
        document.getElementById("currentOutcome").innerHTML = "ROUND LOST";
        let marker = document.getElementById("compScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("compScoreNum").innerHTML = marker;

    }else if(outcome == 2){
        document.getElementById("currentOutcome").innerHTML = "ROUND WON";
        let marker = document.getElementById("playerScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("playerScoreNum").innerHTML = marker;
    }else if(outcome == 1){
        document.getElementById("currentOutcome").innerHTML = "TIE";

    }
}

function playerChoicePaper(){
    compChoice = computerPlay();
    changeCompImg(compChoice);
    const outcome = playRound("paper", compChoice);
    document.getElementById("playerChoice").src = "paper.png";
    if(outcome == 0){
        document.getElementById("currentOutcome").innerHTML = "ROUND LOST";
        let marker = document.getElementById("compScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("compScoreNum").innerHTML = marker;
    }else if(outcome == 2){
        document.getElementById("currentOutcome").innerHTML = "ROUND WON";
        let marker = document.getElementById("playerScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("playerScoreNum").innerHTML = marker;
    }else if(outcome == 1){
        document.getElementById("currentOutcome").innerHTML = "TIE";

    }
}

function playerChoiceScissors(){
    compChoice = computerPlay();
    changeCompImg(compChoice);
    const outcome = playRound("scissors", compChoice);
    document.getElementById("playerChoice").src = "scissors.jpeg";
    if(outcome == 0){
        document.getElementById("currentOutcome").innerHTML = "ROUND LOST";
        let marker = document.getElementById("compScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("compScoreNum").innerHTML = marker;
    }else if(outcome == 2){
        document.getElementById("currentOutcome").innerHTML = "ROUND WON";
        let marker = document.getElementById("playerScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("playerScoreNum").innerHTML = marker;
    }else if(outcome == 1){
        document.getElementById("currentOutcome").innerHTML = "TIE";

    }
}

document.getElementById("rockButton").onclick = playerChoiceRock;
document.getElementById("paperButton").onclick = playerChoicePaper;
document.getElementById("scissorsButton").onclick = playerChoiceScissors;



