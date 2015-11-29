////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
// 'use strict';

function getInput() {
    console.log("Please select either 'rock', 'paper', or 'scissors' to play.");
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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    // All possible combinations of plays
    if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    } else {
        winner = 'tie';
    }

    return winner;
}

function playToFive() {
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    console.log("Let's play Rock, Paper, Scissors");
    // initalize player wins
    var playerWins = 0;
    // initalize computer wins
    var computerWins = 0;

    // as long as neither player or computer has won five times, continue play
    while (playerWins < 5 && computerWins < 5) {
        // get player's move
        var playerMove = getPlayerMove();
        // for testing use - var playerMove = getPlayerMove(randomPlay());
        // get computer's move
        var computerMove = getComputerMove();
        // determine winner by calling getWinner function and passing in the two moves
        var winner = getWinner(playerMove, computerMove);
        // if the winner is the player, add 1 to playerWins
        if (winner === 'player') {
            playerWins ++;
            console.log("Player played " + playerMove + " while computer played " + computerMove);
            console.log("Player won this round.");
            // else if the winner is the computer, add 1 to computerWins
        } else if (winner === 'computer') {
            computerWins ++;
            console.log("Player played " + playerMove + " while computer played " + computerMove);
            console.log("Computer has won this round.");
        // else print moves that player and computer played and declare a tie
        } else {
            console.log("Player played " + playerMove + " while computer played " + computerMove);
            console.log("Player and computer have tied.");
        }
    }
    console.log("The player has a score of " + playerWins + " while the computer a score of " + computerWins + " .");
    return [playerWins, computerWins];
}

playToFive();
