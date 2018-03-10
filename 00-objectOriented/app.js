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
// Person constructor (with single property 'name')
// Allows us to instantiate a Person object
function Person(name, dob) {
  this.name = name;
  //console.log(this); // Returns all instances
  //this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
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