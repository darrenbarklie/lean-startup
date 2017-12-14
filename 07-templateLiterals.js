
// Template literals
// Part of ES6, but compatible in all modern browsers

const name = 'John';
const age = 33;
const job = 'Web Dev';
const city = 'New York City';
let html;

// Without template strings (ES5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
// or
html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

function single(){
  return 'Available';
}

// With template strings (ES6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${age-18}</li>
    <li>${single()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;
