////////////////////////////////////////////////
/*   Provided Code - Please Don't Edi   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move !== 0) {
        move = move; 
    }
    else {
        move = getInput();
    }  
    return move;
}

function getComputerMove(move) {
    if (move !== 0) {
        move = move;
    }
    else {
        move = randomPlay();
    }
    return move;
    }


function getWinner(playerMove,computerMove){ 
    var winner;


    if ((playerMove === "rock" && computerMove === "paper")||
        (playerMove === "paper" && computerMove === "scissors")||
        (playerMove === "scissors" && computerMove === "rock")){
        winner = "computer"; 
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
}
else if ((playerMove === "paper" && computerMove === "rock")||
        (playerMove === "scissors" && computerMove === "paper")||
        (playerMove === "rock" && computerMove === "scissors")){
        winner = "player"; 
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
}
else {
        winner = "tie";
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
}


    return winner;
  
}


function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return winner;
}
// some changes

