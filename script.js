const getRandom = (min, max) => {
  // Max is not inclusive
  let rand = Math.floor(Math.random() * (max - min) + min);
  return rand;
};
const computerPlay = () => {
  // Get a play for the computer turn
  let options = ["rock", "paper", "scissors"];
  let choice = getRandom(0, 3);
  console.log("COM choice must be 0,1,2 and it is " + choice);
  return options[choice];
};

const userPlay = () => {
  // Player turn

  let choice;

  while (true) {
    choice = prompt("Let's Play!!\n\nWhat do you choose?");
    choice = choice.trim().toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    } else {
      alert("Wrong choice");
    }
  }
};

const evalRound = (playerSelection, computerSelection) => {
  // Evaluates the round and checks who's the winner

  if (playerSelection === computerSelection) return `That's a tie!!`;
  switch (playerSelection) {
    case "rock": {
      if (computerSelection === "paper") {
        return "You Lose! Paper beats Rock.";
      } else if (computerSelection === "scissors") {
        return "You Win! Rock beats Scissors.";
      }
      break;
    }
    case "paper": {
      if (computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper.";
      } else if (computerSelection === "rock") {
        return "You Win! Paper beats Rock.";
      }
      break;
    }
    case "scissors": {
      if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors.";
      } else if (computerSelection === "paper") {
        return "You Win! Scissors beats Paper.";
      }
      break;
    }
    default: {
      console.log("Something is wrong!");
      return;
    }
  }
};

const play = () => {
  /**
   * Gets the plays and returns the result as a string
   */

  let player1, player2;

  // plays
  player1 = userPlay();
  player2 = computerPlay();

  return evalRound(player1, player2);
};

(function run() {
  // Self execution function that starts the game

  let result;

  // Main Loop
  while (true) {
    // play
    console.clear();
    let input = prompt(
      "\t\tRock, Paper, Scissors!!!\n\nChoose a number:\n1 - vs COM\n2 - Exit"
    );

    switch (input) {
      case "1": {
        result = play();
        alert(result);
        console.log(result);
        break;
      }
      case "2": {
        alert("Bye");
        return;
      }
    }
  }
})();
