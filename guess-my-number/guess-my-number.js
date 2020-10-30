'use strict';
// initial values when starting the game
let initial = () => {
  return {
    score: 20,
    secretNumber: Math.trunc(Math.random() * 20) + 1
  }
};
// setting up those values
let { score, secretNumber } = initial();
let highscore = 0;

// function to display message
const messageToShow = (message) => {
  document.querySelector('.message').textContent = message;
};

// function Start Again 
document.querySelector('.again').addEventListener('click', () => {
  let { score, secretNumber } = initial();
  messageToShow('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})

// function of validation of the game
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    messageToShow('⛔️ No Number!!');
  } else if (guess === secretNumber) {
    messageToShow('🎉  Correct Number!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageToShow(guess > secretNumber ? '📈 Too hight!' : '📉 Too low!');
      score--;
    } else {
      messageToShow('💥 You lost the game!');
      score = 0;
    }
  }
  document.querySelector('.score').textContent = score;
}) 
