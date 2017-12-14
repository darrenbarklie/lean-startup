// Arrays
// Arrays are an important part of any programming language
// Store multiple values, can be mutated, used in algorithms

// Create arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length; // 7
// Check if is array
val = Array.isArray(numbers); // true
// Get single value
val = numbers[2]; // 33
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36); // 5


// Mutating Array with methods
// Add 250 to array end
numbers.push(250);
// Add 350 to array front
numbers.unshift(350);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,1);
// Reverse array
numbers.reverse();

// Concatinate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort(); // Sorts alphabetically

// Use the "compare function"
val = numbers.sort(function(x, y){
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
});

// Find
function under50(num){
  return num < 50;
}
val = numbers.find(under50); // 44 (remember sorting)


console.log(numbers);
console.log(val);
