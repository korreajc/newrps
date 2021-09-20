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


function game(){
        let playerMarker = 0;
        let compMarker = 0;

    for(let i = 0; i < 5; i++){
        let playSelection = prompt("Choose between rock, paper or scissors.");
        let compSelection = computerPlay();
        playSelection.toLowerCase();
        compSelection.toLowerCase();

        console.log(playSelection);
        console.log(compSelection);

        let marker = playRound(playSelection, compSelection);

        if(marker == 0){
            compMarker++;
            console.log("You lost this round.")
        }else if(marker == 2){
            playerMarker++;
            console.log("You won this round.")
        }else if(marker == 1){
            console.log("You guys tied this round.")
        }
    }

    console.log(compMarker);
    console.log(playerMarker);

    if(compMarker > playerMarker){
        console.log("Computer Wins Game");
    }else if(playerMarker > compMarker){
        console.log("Player wins Game")
    }else if(playerMarker == compMarker){
        console.log("Tie")
    }
}

game();