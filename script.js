function getComputerChoice() {
  let options = ['Rock', 'Paper', 'Scissors'];
  let randomized = options[Math.floor(Math.random() * options.length)];
  return randomized;
}

function playRound(playerSelection, computerSelection) {
  let modifiedSelection = playerSelection.toLowerCase();
  modifiedSelection = modifiedSelection.charAt(0).toUpperCase() + modifiedSelection.slice(1);
    
  if (modifiedSelection === 'Rock' && computerSelection === 'Paper') {
    console.log("You Win! Rock beats Scissors");
  } else if (modifiedSelection === 'Paper' && computerSelection === 'Rock') {
    console.log("You Win! Paper beats Rock");
  } else if (modifiedSelection === 'Scissors' && computerSelection === 'Paper') {
    console.log("You Win! Scissors beats Paper"); 
  } else if (modifiedSelection === computerSelection) {
    console.log("It's a Tie!")
  } else {
    console.log("You Lose!");
  }
}

function game() {
  let playerResults = [];
  let computerResults = [];
  
  for (let i = 0; i < 5; i++) { 
    let playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerResults.push(playerSelection);
    computerResults.push(computerSelection);
    
  }
  
  const playerWinsCount = playerResults.filter(result => result === 5).length;
  
  if (playerWinsCount === 5) {
    console.log('Player wins');
  } else {
    console.log('Computer wins');
  }
}

game();
