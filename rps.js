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

function changePlayerImg(image){
    if(image == "paper"){
        document.getElementById("playerChoice").src = "paper.png";
    }else if(image == "rock"){
        document.getElementById("playerChoice").src = "rock.png";
    }else if(image == "scissors"){
        document.getElementById("playerChoice").src = "scissors.jpeg";
    }
}

function playAgain(){
    const newDiv = document.createElement("button");
    const newContent = document.createTextNode("PLAY AGAIN?");
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("results");
    document.body.insertBefore(newDiv, currentDiv);
}



function playerChoice(hand){
    compChoice = computerPlay();
    changeCompImg(compChoice);
    changePlayerImg(hand);
    const outcome = playRound(hand, compChoice);
    if(outcome == 0){
        document.getElementById("currentOutcome").innerHTML = "ROUND LOST";
        let marker = document.getElementById("compScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("compScoreNum").innerHTML = marker;

        if(marker == 5){
            document.getElementById("resultSectionNum").innerHTML = "YOU LOST THIS ROUND";
            playAgain();
        }

    }else if(outcome == 2){
        document.getElementById("currentOutcome").innerHTML = "ROUND WON";
        let marker = document.getElementById("playerScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("playerScoreNum").innerHTML = marker;

        if(marker == 5){
            document.getElementById("resultSectionNum").innerHTML = "YOU WON THIS ROUND";
            playAgain();
        }
    }else if(outcome == 1){
        document.getElementById("currentOutcome").innerHTML = "TIE";
    }
}

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

document.getElementById("rockButton").onclick = function(){
    playerChoice(rock);
}
document.getElementById("paperButton").onclick = function(){
    playerChoice(paper);
}
document.getElementById("scissorsButton").onclick = function(){
    playerChoice(scissors);
}



