// Create the element 
const li = document.createElement('li');
// Add a class 
li.className = "item added-item";
// Add an id
li.id = "added";
// Add attribute
li.setAttribute('title', 'New item');
// Create text node and append
li.appendChild(document.createTextNode('Hello world'));
// Append li as child to ul
document.querySelector('ul.list').appendChild(li);

console.log(li);
