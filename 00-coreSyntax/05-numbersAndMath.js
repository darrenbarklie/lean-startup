const num1 = 100;
const num2 = 50;
let val;

// Simple math operations with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;  // PI is an Object, has properties and methods
val = Math.E;
val = Math.round(2.8); // 3
val = Math.ceil(2.1); // 3
val = Math.floor(2.9); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8, 2); // 64
val = Math.min(2, 5, 7, 42, -8); // -8
val = Math.max(2, 5, 7, 42, -8); // 42
val = Math.random(); // random decimal

val = Math.floor(Math.random() * 20+1); // random between 1-20

console.log(val);
