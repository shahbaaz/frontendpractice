const name = 'John Doe';
const age = 24;
const job = 'Hacker';
const city = 'Los Angeles';

// console.log(name);

// ES5 way
let htmlHandle;

htmlHandle = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// old way
htmlHandle = '<ul>' +
  '<li>Name: ' + name + '</li>' +
  '<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '<li>City: ' + city + '</li>' +
  '</ul>';

// const user = {
//   name: 'John Doe',
//   age: 35,
//   job: 'Programmer',
//   city: 'Tokyo'
// };

// template literals (ES6)
// htmlHandle = `
//   <ul>
//     <li>Name: ${user.name}</li>
//     <li>Age: ${user.age}</li>
//     <li>Job: ${user.job}</li>
//     <li>City: ${user.city}</li>
//   </ul>
// `;

function greeting() {
  return 'hello';
}

htmlHandle = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+3}</li>
    <li>${greeting()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;


document.body.innerHTML = htmlHandle;
