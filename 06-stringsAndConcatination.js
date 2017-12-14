const firstName = 'Darren';
const lastName = 'Barklie';
const age = 32;
const str = 'Hello there my name is Daz';
const tags = 'web design, web development, marketing';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait!';

// Length
val = firstName.length;
// This is a property and not a method, so not .length()

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[1]; // a

// indexOf
val = firstName.indexOf('r');
val = firstName.lastIndexOf('r');

// charAt()
val = firstName.charAt(2);
// Get last char
val = firstName.charAt(firstName.length-1);

// substring()
val = firstName.substring(2,4) // rr

// slice()
val = firstName.slice(0,3); // Dar
val = firstName.slice(-3); // ren

// split()
// Split a string into an array based on a seperator
val = str.split(' '); // ["Hello", "there", "my" ... ]
val = tags.split(',') // ["web design", "web development", "marketing"]

// replace()
val = str.replace('Daz', 'Jack'); // Hello there my name is Jack

// includes()
val = firstName.includes('rr'); // true
val = firstName.includes('ra'); // false


console.log(val);
