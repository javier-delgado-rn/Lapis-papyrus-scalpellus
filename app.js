

const playerChoiceDisplay = document.createElement('h2');
const computerChoiceDisplay = document.createElement('h2');
const resultDisplay = document.createElement('h2');
const gameOptions = document.getElementById('game');
gameOptions.append(playerChoiceDisplay, computerChoiceDisplay, resultDisplay);
let computerChoice
let playerChoice
const choices = ['lapis', 'papyrus', 'scalpellus'];
const optionClick = (e) => {
  playerChoice = e.target.id
  playerChoiceDisplay.innerHTML = 'Player Choice: ' + playerChoice
  deliverComputerChoice()
  displayResult()
}
const deliverComputerChoice = () => {
  const randomIndex = [Math.floor(Math.random() * choices.length)];
  computerChoice = choices[randomIndex];
  computerChoiceDisplay.innerHTML = 'Computer Choice: ' + computerChoice;
}
for (let i = 0; i < choices.length; i++) {
const button = document.createElement('button');
  console.log(choices[i]);
button.id = choices[i];
button.innerHTML = choices[i];
button.addEventListener('click', optionClick);
gameOptions.appendChild(button);
}

const displayResult = () => {
  switch (playerChoice + computerChoice) {
    case 'scalpelluspapyrus':
    case 'lapisscalpellus':
    case 'papyruslapis':
      resultDisplay.innerHTML = "Somehow you beat the computer!"
      break;
    case 'papyrusscalpellus':
    case 'scalpelluslapis':
    case 'lapispapyrus':
      resultDisplay.innerHTML = "You were defeated by the computer!"
      break;
    case 'papyruspapyrus':
    case 'scalpellusscalpellus':
    case 'lapislapis':
      resultDisplay.innerHTML = "Nobody wins!"
      break;
  }
}
