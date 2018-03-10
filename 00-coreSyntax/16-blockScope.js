// Global scope :
var a = 1;
let b = 2;
const c = 3;


function test() {
  // Function scope:
  var a = 4;
  let b = 5;
  const c = 6;  
  console.log('Function scope: ' + a, b, c);
  // var is a function scope declaration, i.e.
  // different var with same name inside different functions
}
test();


// if, loop, anything wrapped in {}
if(true){
  // Block scope:
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('Block/if scope: ' + a, b, c);
} // Global scope var overwrites global scope

for(var a = 0; a < 10; a++){
  console.log(`Loop: ${a}`);
} // Loop reiterates over global var

console.log('Global scope: ' + a, b, c);