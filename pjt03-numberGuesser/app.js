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
    winningNum = 2,
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


// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  
  // Check if winning number
  if(guess === winningNum){
    // Disable input 
    guessInput.disabled = true;
    // Change border to green
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`You guessed ${winningNum} correctly!`, 'green')
  } else {
    // Play again
  }
});

// Set message 
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}


























