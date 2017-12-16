let val;

const list = document.querySelector('ul.list');
const listItem = document.querySelector('li.item:first-child');

val = listItem;
val = list;

// Different properties attached to these nodes

// Get child nodes
val = list.childNodes; // returns NodeList
// Note that the return characters produce text nodes
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

/* nodeTypes as follows:
  1 - Element
  2 - Attribute (deprecated)
  3 - Text node 
  8 - Comment
  9 - Document itself
  10 - Doctype 
*/

// Get children element nodes 
val = list.children; // returns HTMLCollection
val = list.children[1];
val = list.children[1].textContent = 'Two';
// Children of children
val = list.children[3].children[0]; // Return <a>

// First child
val = list.firstChild; // #text
val = list.firstElementChild; // <li>
// Last child
val = list.lastChild; // #text
val = list.lastElementChild; // <li>

// Count child elements
val = list.childElementCount;

// Get parent node 
val = listItem.parentNode; // <ul>
val = listItem.parentElement; // <ul>
val = listItem.parentElement.parentElement; // <body>

// Get next sibling
val = listItem.nextSibling; // #text
val = listItem.nextElementSibling; // <li>
val = listItem.nextElementSibling.nextElementSibling; // <li>

// Get previous sibling
val = listItem.previousSibling; // #text
val = listItem.previousElementSibling; // null

console.log(val);
