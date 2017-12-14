let val;

// Conversion: Number to String
val = String(23);
val = String(4+4);
// Conversion: Boolean to String
val = String(true);
// Conversion: Date to String
val = String(new Date());
// Conversion: Array to String
val = String([1,2,3,4]);

// toString() method
val = (5).toString();
val = (true).toString();


// Conversion: String to number
val = Number('5');
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number('Hello') // NaN
val = Number([1,2,3]) // NaN

val = parseInt('100.30'); // 100 - Interger only
val = parseFloat('100.30'); // 100.30 - Float decimals


// Output
console.log(val);
console.log(typeof val);
//console.log(val.length); // Strings only
console.log(val.toFixed(2)); // Numbers only


// Type coercion
// JavaScript automatically assumes a data type based on contributed values
const val1 = '5';
const val2 = 6;
const sum = val1 + val2; // Changes all strings, concats string
const sum2 = Number(val1 + val2); // Returns a number

console.log(sum);
console.log(typeof sum);
console.log(sum2);
console.log(typeof sum2);
