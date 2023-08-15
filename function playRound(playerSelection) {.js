function playRound(playerSelection) {
  const options = ["rock", "paper", "scissors"];

  const computerSelection = options[Math.floor(Math.random() * options.length)];

  let result;

  if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You Win! Scissors beats Paper";
  } else if (playerSelection === computerSelection) {
    result = "It's a tie";
  } else {
    result = "You Lose!";
  }

  console.log(`Player chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  console.log(result);
}
