// if (some condition) {
//   do something;
// } else {
//   do something else;
// }

let id = 100; // = is an assignment

// EQUAL TO
// if (id == 101) { // == is a comparison operator
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// NOT EQUAL TO
// if (id != 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// console.log(typeof id);
// id = '100';
// console.log(typeof id);

// // EQUAL TO VALUE AND TYPE
// // if (id === 100) {
// //   console.log('CORRECT');
// // } else {
// //   console.log('INCORRECT');
// // }

// // NOT EQUAL TO VALUE AND TYPE
// if (id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Test if undefined
// if (typeof id !== 'undefined') { // 'string' !== 'undefined'
//   console.log(`The id is ${id}`);
// } else {
//   console.log('NO ID');
// }

// id = 300;
// // GREATER THAN OR LESS THAN
// // if (id > 200) {
// // if (id < 200) {
// // if (id >= 200) {
// if (id <= 200) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

let color = 'red';
color = 'blue';
color = 'green';
if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is neither red nor blue');
}

// LOGICAL OPERATORS
// AND && (both the conditions should be true)
// OR || (any one of the conditions should be true)
const name = 'Sam';
let age = 14;

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race.`);
}

// template literals
const myStr = 'My name is ' + name + ' and I am ' + age + ' years old';

console.log(myStr);

const myStr2 = `My name is ${name} and I am ${age} years old. This will be ${1 == 1}`;

console.log(myStr2);

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
age = 24;
const greeting = age > 20 ? 'Hello' : 'Hi';

console.log('Value of greeting is', greeting);