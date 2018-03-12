/*
    Object oriented programming - two most important things (in any language)
    >> CONSTRUCTOR
    >> THIS keyword
  
    ES6 has classes, but first learn under-the-hood ES5 handling manual way
*/

// Object literal example
const daz = {
  name: 'Daz',
  age: 32
}
//console.log(daz.age);
// Suitable for single object/instance

// Creating multiple instances means you should create a constructor,
// use prototypes, inheritance, etc...



// CONSTRUCTOR
// Person constructor (with properties)
// Allows us to instantiate a Person object
function Person(name, dob) {
  this.name = name;
  //console.log(this); // Returns all instances
  //this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime(); // Return 1027298570498
    const ageDate = new Date(diff); // Return Monday July 22 2002 01:44:23
    return Math.abs(ageDate.getUTCFullYear() - 1970); // 2002 - 1070 = 32
  }
}
// To instantiate a new project, use NEW keyword
//const dazza = new Person('Dazza');
//const daniel = new Person('Daniel');
//const david = new Person('David');

//console.log(daniel);

// THIS references the current instance of the object (function scope)

const dazzle = new Person('Daz', '8-22-1985');
console.log(dazzle.calculateAge());



// OBJECT CONSTRUCTORS
// Typically avoided as confusing and not performant
// but good knowledge in case encountered in the wild

// String
const name1 = 'Jeff';
const name2 = new String('Jeff');
// Note: name2 typeof is obect, not string
// Number
const num1 = 5;
const num2 = new Number(5);
// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
// Function
const getSum1 = function(x,y){
  return x + y;
}
const getSum2 = new Function ('x', 'y', 'return 1 + 1');
// Object 
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('//\w+');



