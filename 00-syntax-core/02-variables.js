// Three keywords to define a variable
// var, let, const
// let and const have big advantages over var for block level scope


// Create a variable
var name = 'Darren Barklie';
console.log(name);
// Reassign a variable
name = "Brad Traversy";
console.log(name);


// Initializing: Create variable with no value
var greeting;
console.log(greeting); // Return undefined
// Set a value on initialized variable
greeting = 'Hello';
console.log(greeting); // Return 'Hello'


// Variable naming rules and conventions
// Can contain only letters, numbers, _, $
// Cannot start with numbers
// var 1name = 'Ben'; // Syntax error


// Multi word variable name options
// Camel case is prefered for most usages
var firstName = 'Daz'; // Camel case
var first_name = 'Daz'; // Underscore
var FirstName = 'Daz'; // Pascal case
var firstname = 'Daz'; // No case (not recommended)
// Note that Pascal case is used for ES6 Classes


// let
let book; // Initialized
book = 'The Lean Startup';
console.log(book); // Return The Lean Startup
book = 'The War of Art';
console.log(book); // Return The War of Art
// Reassignment takes place


// const
// const drink; // Cannot be initialized
const drink = 'Water';
console.log(drink); // Return Water
// const drink = 'Whiskey'; // Returns error

// Object literal mutation
const person = {
  name: 'John',
  age: 30
}
person.name = 'Sara';
person.age = 32;
console.log(person);

// Array mutation
const numbers = [1,2,4,8,64];
numbers.push(128);
console.log(numbers);

// Values held by a const may be mutated, however what cannot change
// is the actual object itself, i.e. re-declaring numbers = [...]
