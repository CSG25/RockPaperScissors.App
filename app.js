const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceButton');
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {

  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player:${player}`
  computerText.textContent = `Computer:${computer}`
  resultText.textContent = checkWinner();
  
}));

function computerTurn() {
  const rand = Math.floor(Math.random() * 3) + 1;
  switch(rand){
    case 1:
      computer = 'ROCK';
      break;
    case 2:
      computer = 'PAPPER';
      break;
    case 3:
      computer = 'SCISSORS';
      break;
      default:
      break;
  }
};

function checkWinner() {
  if(player === computer) {
    return 'Draw!';
  }
  else if (computer == 'ROCK'){
    return (player == 'PAPPER') ? 'You win!' : 'You lost!'
  }
  else if (computer == 'PAPPER'){
    return (player == 'SCISSORS') ? 'You win!' : 'You lost!'
  }
  else if (computer == 'SCISSORS'){
    return (player == 'ROCK') ? 'You win!' : 'You lost!'
  }
};