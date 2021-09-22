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
        document.getElementById("compChoice").src = "paperhand.png";
    }else if(image == "rock"){
        document.getElementById("compChoice").src = "rockhand.png";
    }else if(image == "scissors"){
        document.getElementById("compChoice").src = "scissorshand.png";
    }
}

function changePlayerImg(image){
    if(image == "paper"){
        document.getElementById("playerChoice").src = "paperhand.png";
    }else if(image == "rock"){
        document.getElementById("playerChoice").src = "rockhand.png";
    }else if(image == "scissors"){
        document.getElementById("playerChoice").src = "scissorshand.png";
    }
}

function createPlayAgainBtn(){
    const newDiv = document.createElement("button");
    const newContent = document.createTextNode("PLAY AGAIN?");
    newDiv.appendChild(newContent);
    newDiv.setAttribute("id", "btn");
    const currentDiv = document.getElementById("results");
    document.body.insertBefore(newDiv, currentDiv);   
    
}

function gameReset(){
    document.getElementById("compScoreNum").innerHTML = "0";
    document.getElementById("playerScoreNum").innerHTML = "0";
    document.getElementById("resultSectionNum").innerHTML = "0";

    const element = document.getElementById("btn");
    element.remove();
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
            document.getElementById("resultSectionNum").innerHTML = "YOU LOST THIS GAME";
            createPlayAgainBtn();
        }

    }else if(outcome == 2){
        document.getElementById("currentOutcome").innerHTML = "ROUND WON";
        let marker = document.getElementById("playerScoreNum").innerHTML;
        parseInt(marker);
        marker++;
        document.getElementById("playerScoreNum").innerHTML = marker;

        if(marker == 5){
            document.getElementById("resultSectionNum").innerHTML = "YOU WON THIS GAME";
            createPlayAgainBtn();
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

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'btn'){
          gameReset();
     }
 });

