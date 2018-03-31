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
//console.log(dazzle.calculateAge()); // Return 32



// OBJECT CONSTRUCTORS
// Typically avoided as confusing and not performant
// but good knowledge in case encountered in the wild

// String
const name1 = 'Jeff';
const name2 = new String('Jeff');
// Note: name2 typeof is object, not string
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



// PROTOTYPES 
// Each object in JS has a prototype
// A prototype is an object itself
// All objects inherit their properties and methods from their prototype 
// Object.prototype 
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}


// Since the calculateAge function has no variance between instances, it should be assigned to the top-level prototypes

// Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970); 
}
// Get full name 
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}
// Gets married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const john = new Person('Jonh', 'Wick', '04-01-1967');
const mary = new Person('Mary', 'Jane', 'March 20 1978');
//console.log(mary);

//console.log(john.calculateAge());
//console.log(john.getFullName());
//console.log(mary.getFullName());
mary.getsMarried('Smith');
//console.log(mary.getFullName());
// Access to Object.prototype 
//console.log(mary.hasOwnProperty('firstName')); // true



// PROTOTYPE INHERITANCE
// Person constructor 
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting prototype method
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

// Custom constructor 
// .call() is a function that allows us to call another function from somewhere else in the current context
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
console.log(customer1);

// Customer greeting 
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName}, welcome to our Company`;
}

console.log(customer1.greeting()); // Returns not a function...



// Using Object.create 
const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}
const jane = Object.create(personPrototypes);
jane.firstName = 'Mary';
jane.lastName = 'Williams';
jane.age = 30;

jane.getsMarried('Thompson');
console.log(jane.greeting());

const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});

console.log(brad);
console.log(brad.greeting());



// Using ES6 classes
// Create a class with constructor, methods and properties
class Client {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  } // Any method added inside the class is listed under the prototype
  
  calculateAge() {
    const diff = Date.now() = this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  
  static addNumbers(x, y) {
    return x + y;
  }
  // Static method is one that you can use without instantiating an object (creating an object from the class)
}

const jenny = new Client('Jenny', 'Jones', '11-12-1980');

jenny.getsMarried('Smith');

console.log(jenny);

console.log(Client.addNumbers(1,3));



// Inheritance and Extending CLasses




















