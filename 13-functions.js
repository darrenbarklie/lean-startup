// FUNCTIONS
// Blocks of code that are defined and called at a later time
// or defined and called at the same time


// FUNCTION DECLARATIONS

// Declare the function
function greet(){
  // Inside here is the function scope
  console.log('Hello');
}
// Call the function
greet();


// Declare a second function
function greet2(){
  // Typically you immediately return something
  return 'Hello';
}
// Invoke the return with an action
console.log(greet2());

console.clear();


// Functions, declarations and expressions can take in PARAMETERS
// Also called arguements
function greeting(firstName = 'John', lastName = 'Doe'){
  return `Hello there, ${firstName} ${lastName}!`;
}
console.log(greeting('John', 'Wick'));
// If nothing is passed = undefined undefined
// ES5 solved with:
// if(firstName === 'undefined'){firstName = 'John'}
// if(lastName === 'undefined'){lastName = 'Doe'}
// ES6 defines defaults in parameters/arguements

console.clear();


// FUNCTION EXPRESSIONS

// Essentially putting a function as a varaible assignment
// Can be named or not (usually not due to assignment)
const square = function(x = 8){
  return x*x;
}; // ; req'd because var

console.log(square(10));

// Hoisting and closures are two scenarios where expressions have advantages


// IMMEDIATELY INVOKALE FUNCTION EXPRESSIONS (aka IIFEs)

// Function is declared and run at same time
// Needs to be expression - wrap in parentheses
(function(){
  console.log('IIFE Ran...');
})();  // Must end with parentheses to run a function

(function(name){
  console.log('Hello ' + name);
})('Daz');

console.clear();


// PROPERTY METHODS

// When a function is put inside an oject, it's called a method
const todo = {
  add: function(){
    console.log('Add todo');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`)
  }
}
todo.add();
todo.edit(22);
// Can also define functions for object outside of this:
todo.delete = function(){
  console.log('Delete todo...')
}
todo.delete();
