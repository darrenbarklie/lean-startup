// Two types of data types in JavaScript

// Primitive Data Types

// Stored directly in the location the variable accesses
// Stored on the stack

/*
    String
    Number
    Boolean
    Null
    Undefined
    Symbols (ES6)
*/

const name = 'John Doe';
const age = 12;
const hasFriends = false;
const friends = null;
// Returns object, JS legacy bug
let test;
const sym = Symbol();
console.log(typeof sym);


// Reference Data Types - Objects

// Accessed by reference
// Objects that are stored on the heap
// A pointer to a location in memory

/*
    Arrays
    Object Literals
    Functions
    Dates
    Anything Else...
*/

const hobbies = ['movies', 'music'];
const address = {
  street: 'Rowdan Road',
  town: 'Whereversville',
  city: 'Nowhere'
}
const today = new Date();
console.log(typeof today);


// Dynamically typed language

// Types are associated with values, not variables
// The same variable can hold multiple types
// We do not need to specify types (most languages are statically types)
// Supersets of JS and addons to allow static typing (TypeScript, Flow, etc.)
