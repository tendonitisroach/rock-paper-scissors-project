function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomized = options[Math.floor(Math.random() * options.length)];
    return randomized;
  }
  
  function playRound(playerSelection, computerSelection) {
    let modifiedSelection = playerSelection.toLowerCase();
    modifiedSelection = modifiedSelection.charAt(0).toUpperCase() + modifiedSelection.slice(1);
    
    if (modifiedSelection === 'Rock' && computerSelection.toLowerCase() === 'paper') {
      return console.log("You Lose! Paper beats Rock");
    } else if (modifiedSelection === 'Paper' && computerSelection.toLowerCase() === 'scissors') {
      return console.log("You Lose! Scissors beats Paper");
    } else if (modifiedSelection === 'Scissors' && computerSelection.toLowerCase() === 'rock') {
      return console.log("You Lose! Rock beats Scissors");
    } else if (modifiedSelection === 'Rock' && computerSelection.toLowerCase() === 'scissors') {
      return console.log("You Win! Rock beats Scissors");
    } else if (modifiedSelection === 'Paper' && computerSelection.toLowerCase() === 'rock') {
      return console.log("You Win! Paper beats Rock");
    } else if (modifiedSelection === 'Scissors' && computerSelection.toLowerCase() === 'paper') {
      return console.log("You Win! Scissors beats Paper");
    } else {
      return console.log("It's a tie");
    }
  }
  
  function game() {
    playRound()
  }