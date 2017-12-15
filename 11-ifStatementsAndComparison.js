// if statements
/*
  if(something){
    do something
  } else {
    do something else
  }
*/

const id = 100;

// Equal to
if(id == 100){
  console.log('Is equal');
} else {
  console.log('Is not equal');
}
// Single = is assignment
// Double == is comparison

// Not equal to
if(id != 100){
  console.log('Is equal');
} else {
  console.log('Is not equal');
}

// Comparision with == tests for content only and not type
// Therefore string '100' == 100 number is true

// Value AND type equal
if(id === '100'){
  console.log('True');
} else {
  console.log('False');
}
// Recommended to use === most of the time

// Value AND type not equal
if(id !== '100'){
  console.log('True');
} else {
  console.log('False');
}

console.clear();


const id2 = 100;

// Testing if something first exists, THEN taking action
// is best achieved with typeof test
if(typeof id2 !== 'undefined'){
  console.log(`The id is ${id2}`);
} else {
  console.log('No id is present');
}

// Greater than or less than
if(id2 > 100){
  console.log('Is greater than');
} else {
  console.log('Is not greater than');
}
// Greater than or equals to >= / <=

// If else
const color = 'yellow';

if(color === 'red') {
  console.log('Color is red');
} else if(color === 'orange'){
  console.log('Color is orange');
} else {
  console.log('Color is not red or orange');
}

// Logical operators

const name = 'Steve';
const age = 66;
// and &&
if(age > 0 && age <= 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}
// or ||
if(age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} can run in the race`);
}

console.clear();

// Ternary operator (conditional shorthand)
console.log(id === 100 ? 'Correct' : 'Incorrect');

// Without braces (not advised)
if(id === 100)
  console.log('Correct');
else
  console.log('Incorrect');
