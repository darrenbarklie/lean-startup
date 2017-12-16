// Document Object Methods that allow us to pull things
// from the DOM to work with 
// jQuery is redundant for DOM manipulation

let val;

// SINGLE ELEMENT SELECTORS
val = document.getElementById('subtitle');

// Get attributes from element
val = document.getElementById('subtitle').id;
val = document.getElementById('subtitle').className;

// Change styling
val = document.getElementById('subtitle').style.color = 'red';

// Chnage content
val = document.getElementById('subtitle').textContent = 'Change the title';
val = document.getElementById('subtitle').innerText = 'Changed it again';
val = document.getElementById('subtitle').innerHTML = '<span style="color: blue;">Changed with HTML</span>';
// Not best practoce tp call doucment.getElementById each time
// Set element to a const, then call the const

// Query Selector
val = document.querySelector('#subtitle');
val = document.querySelector('.h2-subtitle');
val = document.querySelector('h2');
// More than one match, will return the first only
val = document.querySelector('h2:first-of-type');

console.log(val);


// MULTIPLE ELEMENT SELECTORS
// Returns HTMLCollection or NodeList

// ClassName Selector
const items = document.getElementsByClassName('item');
console.log(items);
console.log(items[2]);
items[1].style.color = ['red'];
items[2].innerText = ['Three'];

// Target then select
const listItems = document.querySelector('ul').getElementsByClassName('item');
console.log(listItems);

// TagName Selector
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[2]);
lis[3].style.color = ['orange'];
lis[4].innerText = ['Five'];

console.clear();


// Convert HTMLCollection into array
lis = Array.from(lis);
lis.reverse();
lis.forEach(function(li){
  console.log(li);
})

console.log(lis);

console.clear();


// ALL Selector
const itemsList = document.querySelectorAll('ul.list li.item'); // Returns Node List (doesn't need conversion to array)

itemsList.forEach(function(item, i){
  item.textContent = `${i}: Hello there`;
});

const itemsListOdd = document.querySelectorAll('ul.list li.item:nth-child(odd)');
const itemsListEven = document.querySelectorAll('ul.list li.item:nth-child(even)');

itemsListOdd.forEach(function(item, i){
  item.style.background = 'skyblue';
});

for(let i = 0; i < itemsListEven.length;  i++){
  itemsListEven[i].style.background = 'yellow';
} // will work on HTMLCollection as you can still use length and access with index
