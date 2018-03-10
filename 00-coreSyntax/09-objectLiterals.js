// Object literals
// Define an object literal with key pair values
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports', 'travel'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age; // this refers to current object
  }
}

let val;
// Get whole object
val = person;
// Get specific value
val = person.firstName; // Steve
val = person['lastName']; // Smith
val = person.age; // 30
val = person.hobbies; // whole array
val = person.hobbies[2]; // travel
val = person.address.state // FL
val = person.address['city'] // Miami
val = person.getBirthYear(); // 1987

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 22},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
