//Initialize Variables for CPU and computer choice and score
let userMenuSelection;
let computerSelection;
let userSelection;
let userRoundScore;
let userGameScore = 0;
let computerRoundScore;
let computerGameScore = 0;
let gameNumber = 1;
let rockRegex = /rock/i;
let paperRegex = /paper/i;
let scissorsRegex = /scissors/i;

//Greeting Message
alert("Welcome to rock paper scissors");

//Menu loop
while (userMenuSelection != 3) {

    //Ask user which menu option they would like to pick
    userMenuSelection = prompt(`Main Menu\n1: Play game\n2: View Score\n3: Exit\nPlease enter 1, 2 or 3`);

    //Menu option 1
    if (userMenuSelection == 1) {
        //Start game
        playGame();
    }

    //Menu option 2
    if (userMenuSelection == 2) {
        //View score card
        viewScore();
    }

    if (userMenuSelection == 3) {
        //Exit
        exit();
    }
}


//Function that plays a best of 5 game of rock, paper, scissors
function playGame() {

    //Initialize/Resetting score/game variables to 0
    let roundNumber = 1;
    userRoundScore = 0;
    computerRoundScore = 0;

    //Loop that runs game till either user or CPU gets 3 wins (Best of 5)
    while (userRoundScore !== 3 && computerRoundScore !== 3) {

        //User is prompted to enter their choice and it is stored in userSelection
        userSelection = prompt("Enter your choice (Rock, Paper or Scissors)");

        //CPU choice is generated from getComputerChoice function
        computerSelection = getComputerChoice();

        //Logging user and CPU choices for testing/debugging
        console.log("User's selection : " + userSelection);
        console.log("CPU's selection : " + computerSelection);

        //User and CPU choice are evaluated
        //Output message based on evaluation
        console.log(`Game ${gameNumber}: Round ${roundNumber}: ${playRound(userSelection, computerSelection)}`);

        //Increment round number
        roundNumber++;
    }
    //If user won 3 rounds , user's overall game win count is incremented
    if (userRoundScore === 3) {
        console.log("You won the game !");
        userGameScore++;
    } else {
        console.log("CPU won the game, better luck next time !");
        computerGameScore++;
    }
    gameNumber++;
}

//Function that prints out scores
function viewScore() {

    //Printing user score
    if (userGameScore == 1) {

        console.log(`You have won ${userGameScore} game.`);

    } else {

        console.log(`You have won ${userGameScore} games.`);

    }

    //Printing CPU score
    if (computerGameScore == 1) {

        console.log(`CPU has won ${computerGameScore} game.`);

    } else {

        console.log(`CPU has won ${computerGameScore} games.`);
    }

    //If user is tied with the CPU
    if (userGameScore == computerGameScore) {

        console.log(`You and the CPU are tied up, play a game to break the tie.`)

        //If the user is ahead of the CPU
    } else if (userGameScore > computerGameScore) {

        if ((userGameScore - computerGameScore) == 1) {

            console.log(`You're ahead of the CPU by ${userGameScore - computerGameScore} game, don't let it catch up!`)

        } else {

            console.log(`You're ahead of the CPU by ${userGameScore - computerGameScore} games, good job !`)

        }

        //If the CPU is ahead of the user
    } else {

        if ((computerGameScore - userGameScore) == 1) {

            console.log(`You're behind the CPU by ${computerGameScore - userGameScore} game, you just need 1 good game !`)

        } else {

            console.log(`You're behind the CPU by ${computerGameScore - userGameScore} games, lady luck can be cruel !`)

        }
    }
}

//Function that prints exit message
function exit() {
    if (userGameScore == computerGameScore) {
        alert(`It could have been worse !`);
    } else if (userGameScore > computerGameScore) {
        alert(`You ended up on top, great job !`);
    } else {
        alert(`Can't win them all`);
    }
}

//Function that generates CPU's choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    return randomNumber === 1 ? "Rock" : randomNumber === 2 ? "Paper" : "Scissors";
}

//Function that evaluates the results
function playRound(userSelection, computerSelection) {
    //If user selected rock
    //Switch
    //CPU selected rock
    //CPU selected paper
    //CPU selected scissors
    if (rockRegex.test(userSelection)) {
        switch (computerSelection) {
            case "Rock":
                return "It's a tie, CPU also chose Rock";

            case "Paper":
                computerRoundScore++;
                return "You Lose ! CPU chose Paper and Paper beats Rock";

            case "Scissors":
                userRoundScore++;
                return "You Win ! CPU chose Scissors and Rock beats Scissors";
        }
    }

    if (paperRegex.test(userSelection)) {
        switch (computerSelection) {
            case "Rock":
                userRoundScore++;
                return "You Win ! CPU chose Rock and Paper beats Rock";

            case "Paper":
                return "It's a tie, CPU also chose Paper";

            case "Scissors":
                computerRoundScore++;
                return "You Lose ! CPU chose Scissors and Scissors beats Paper";
        }
    }

    if (scissorsRegex.test(userSelection)) {
        switch (computerSelection) {
            case "Rock":
                computerRoundScore++;
                return "You Lose ! CPU chose Rock and Rock beats Scissors";

            case "Paper":
                userRoundScore++;
                return "You Win ! CPU chose Paper and Scissors beats Paper";

            case "Scissors":
                return "It's a tie, CPU also chose Scissors";
        }
    }
}