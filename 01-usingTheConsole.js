
//  Expressions can be typed straight into the browser JavaScript console
//  for immediate execution.  This is most useful for testing and debugging
//  on the fly.

/*
    4 => 4
    4+4 => 8
    #document => entire document structure
    document.querySelector('h1').style.color = 'red'
*/

// Log a string
console.log('JavaScript running');
// Log a number
console.log(123);
// Log a Boolean
console.log(true);
// Log a variable
var greeting = 'Hello';
console.log(greeting);
// Log a string
console.log([1,2,3,4]);
// Log an object literal
console.log({a: 1, b: 2, c: 3});
// Log an object literal as table
console.table({a: 1, b: 2, c: 3});
// Log an error message
console.error('This is an error');
// Log a warning message
console.warn('This is a warning message');
// Clear the console
console.clear();

// Console timer functionality
console.time('Hello');
  console.log('Time these actions');
  console.log('Time these actions');
  console.log('Time these actions');
  console.log('Time these actions');
  console.log('Time these actions');
  console.log('Time these actions');
  console.log('Time these actions');
  console.log('Time these actions');
console.timeEnd('Hello');
