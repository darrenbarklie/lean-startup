// REPLACE ELEMENT 

// Create Element 
const newHeader = document.createElement('h2');
// Add id
newHeader.id = 'task-title';
// New text node
newHeader.appendChild(document.createTextNode('New Task List'));

// Get the old header
const oldHeader = document.getElementById('subtitle');
// Parent
const wrapper = document.querySelector('.wrapper');

// Replace 
wrapper.replaceChild(newHeader, oldHeader);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item
lis[0].remove();
// Remove child element 
list.removeChild(lis[2]);


// CLASSES AND ATTRIBUTES 
const lastLi = document.querySelector('li:last-child');
const link = lastLi.children[1];


let val;

// Classes 
val = link;
val = link.className; // random-link 
val = link.classList[0]; // random-link
link.classList.add('test', 'another-test');
val = link.classList;
link.classList.remove('another-test');

// Attributes 
val = link.getAttribute('href');  // #
val = link.setAttribute('href', 'http://www.google.com');
val = link.hasAttribute('href'); // true
val = link.hasAttribute('title'); // false
val = link.setAttribute('title', 'Google');
val = link.removeAttribute('title');
val = link;

console.log(val);
