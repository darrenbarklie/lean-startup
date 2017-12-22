const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h2');
const select = document.querySelector('select');

// CLear input
taskInput.value = '';
// Common pattern to clear data after submission

// On form submit action
//form.addEventListener('submit', runEvent);

// On keydown action
//taskInput.addEventListener('keydown', runEvent);

// On keyup action
//taskInput.addEventListener('keyup', runEvent);

// On keypress action 
//taskInput.addEventListener('keypress', runEvent);

// On focus
//taskInput.addEventListener('focus', runEvent);

// On blur
//taskInput.addEventListener('blur', runEvent);

// Cut
//taskInput.addEventListener('cut', runEvent);

// Paste
//taskInput.addEventListener('paste', runEvent);

// Input 
//taskInput.addEventListener('input', runEvent);
// Any type of interaction with the input element

// Change
//select.addEventListener('change', runEvent);


function runEvent(e){
  //e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);
  
  heading.innerText = e.target.value;
  
  // Get input value
  console.log(taskInput.value);
}