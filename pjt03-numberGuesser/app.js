/*
- Player must guess a number btween a min and max
- Play gets a certain amount of guesses
- Notify player of guesses remaining
- Notify play of a correct guess
- Notify player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;
    
// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Listen for play again
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});


// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  
  // Check if winning number
  if(guess === winningNum){
    // Game won
    gameOver(true, `You guessed ${winningNum} correctly!`);
    
  } else {
    guessesLeft -= 1
    
    if(guessesLeft === 0) {
      // Game lost
      gameOver(false, `You have no guesses left, you lost.`);
    } else {
      // Game continues
      guessInput.value = '';
      setMessage(`Guess incorrect, you have ${guessesLeft} guesses left.`, 'red')
    }
  }
});


// Game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red'; 

  // Disable input 
  guessInput.disabled = true;
  // Change border to green
  guessInput.style.borderColor = color;
  // Set text color 
  message.style.color = color;
  // Set message
  setMessage(msg);
  
  // Play again?
  guessBtn.value = 'Play again?';
  guessBtn.className += 'play-again';
}


// Get winning number 
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


// Set message 
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}


