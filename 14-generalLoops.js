// Loops and Iterations
// Loop is an instruction that repeats until a specific condition is met

// FOR Loop
// Setup like a function, takes in three parameters:
// 1. Declaration of variable (no const)
// 2. Condition to continue loop
// 3. Increment action to repeat
for(let i = 0; i < 10; i++){
  console.log(i);
} // 1,2,3,4,5,6,7,8,9

// Can nest conditions inside the loop
for(let i = 0; i < 10; i++){
  if(i === 2) {
    console.log('2 is the best number');
    continue; // Forces continuation of loop with next iteration
  }

  if(i === 5){
    console.log('Stop the loop!')
    break; // Breaks the loop
  }

  console.log('Number ' + i);
}

console.clear();


// WHILE loop
// In general, use for loop when you know the number of iterations,
// otherwise use a while loop for unspecified iterations
// 1. Set variable outside of the loop
let j = 0;
// 2. Only single condition within the parenthesis
while(j < 10){
  console.log('Number is ' + j);
  // 3. Iterate
  j++;
}

console.clear();


// DO WHILE
// Always runs once no matter what
let k = 100;

do {
  console.log('Number is ' + k);
  k++;
}
while(k < 10);

console.clear();


// LOOP THROUGH ARRAYS
// Arrays have specific methods for looping through
// but it is still an option
cars = ['Ford', 'Honda', 'Toyota', 'Cheveron', 'SMART']

// FOR loop is functional but messy
// for(let l = 0; l < cars.length; l++) {
//   console.log(cars[l]);
// }

// FOREACH loop is much cleaner and recommended
// Simple loop:
cars.forEach(function(car){
  console.log(car);
});
// 3 parameters: iterator, index, array object
cars.forEach(function(car, index, array){
  console.log(`${index}: ${car}`);
  console.log(array);
});

console.clear();


// MAP loop
// Mostly used to return a different array instance
const users = [
  {id:1, name: 'John'},
  {id:2, name: 'Sara'},
  {id:3, name: 'Jake'},
  {id:4, name: 'Dave'}
];
// Uses callback function
const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

console.clear();

// FOR IN loop
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  //console.log(x); // Logs the keys only
  console.log(`${x} : ${user[x]}`);
}
