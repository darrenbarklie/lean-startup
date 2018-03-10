// Check out window.localStorage API
// What you set as a value has to be a string

// SET LOCAL STORAGE ITEM 
// Local storage will stay after the session 
//localStorage.setItem('name', 'John');
// Check dev tools > Application > Local Storage


// SET SESSION STORAGE ITEM 
// Session storage will stay after the session 
// sessionStorage.setItem('name', 'Beth');
// Check dev tools > Application > Sesson Storage

// Remove from storage 
//localStorage.removeItem('name');

// Get the value from storage 
// const name = localStorage.getItem('name');

// Clear
// localStorage.clear(); // Don't set the storage above
// 
// console.log(name);


document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;
  
  let tasks;
  
  // Pull from local storage, or set empty array
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // Push to array object
  tasks.push(task);
  // Stringify and send to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  e.preventDefault();
});
// Parse localStorage string to objects 
const tasks = JSON.parse(localStorage.getItem('tasks'));
// forEach can loop on object items
tasks.forEach(function(task){
  console.log(task);
});
