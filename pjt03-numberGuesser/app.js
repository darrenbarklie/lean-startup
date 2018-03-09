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
      