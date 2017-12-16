// DOCUMENT OBJECT MODEL 
// Tree of nodes/elements created by the browser
// JavaScript can be used to read/write/manipulate to the DOM 
// Object Oriented Representation (each object has own properties and methods)

let val;

val = document; // Returns entire Document ObjecSt
val = document.all; // Shows all elements in HTMLCollection (NOT array)
val = document.all[2]; // <meta charset="UTF-8">
val = document.all.length; // Can use properties
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.charset;
val = document.contentType;

// Possible to select stuff without selectors
// however NOT recommended
// val = document.forms; // Returns HTMLCollection
// val = document.forms[0]; // Returns undefined
// val = document.forms[0].id; // Returns id
// val = document.forms[0].method; // Returns method
// val = document.forms[0].action; // Returns action

val = document.links; // Returns HTMLCollection
val = document.links[0]; // Returns undefined
val = document.links[0].id; // Returns id
val = document.links[0].className; // Returns classes
val = document.links[0].classList; // Returns DOMTokenList of classes
val = document.links[0].classList[2]; // Returns indexed class

val = document.images;

val = document.scripts;
val = document.scripts[0].getAttribute('src');


// Turn HTMLCollections into arrays
let scripts = document.scripts; // Returns HTMLCollection
let scriptsArray = Array.from(scripts); // Convert to array

scriptsArray.forEach(function(script){
  console.log(script.getAttribute('src'));
}) // Loop array and output attributes

console.log(val);
