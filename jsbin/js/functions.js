console.log('FUNCTIONS');

/**
 * f(x) = x2 + 2x + 1
 * x | f(x)
 * --------
 * 0 | 1
 * 1 | 4
 * 2 | 9
 * 
 * f(x) = 5;
 * 
 * function === method
 */

// function greet() {
//   console.log('Hello');
//   // return 5;
//   // return {a: 123, b: 456};
//   return 'hello';
// }

// const myVar = greet();

// console.log(myVar);

// function greet(firstName, lastName) {
//   if (typeof firstName === 'undefined') {
//     firstName = 'John';
//   }
//   if (typeof lastName === 'undefined') {
//     lastName = 'Doe';
//   }
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// // console.log(greet('John', 'Doe'));
// console.log(greet('Peter', 'Pan'));

// ES6
function greet(firstName = 'John', lastName = 'Doe') {
  return `Hello ${firstName} ${lastName}`;
}

// console.log(greet('Steve', 'Jobs'));
console.log(greet());

// function sum(a, b) { // named functions
//   return a + b;
// }

// console.log(sum(3, 5));

// Anonymous functions
const sum = function (x, y) {
  return x + y;
}

const myObject = {a: 1};
const myArr = [1,2,4];

// Function expressions
const square = function (x = 3) {
  return x * x;
}

console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFE
(function() {
  console.log('IIFE...');
})();

(function(name) {
  console.log('Hello ' + name);
})('Bill');

// Property methods
const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log('Delete todo...');
};

todo.add();
todo.edit(23);
todo.delete();

// Two types functions
// Pure functions and Impure functions

// Pure functions: For same input, same result or same output
function add(a, b) {
  return a + b;
}

// Input 2, 3
console.log('Pure function', add(2, 3)); // output: 5
console.log('Pure function', add(2, 3)); // output: 5
console.log('Pure function', add(2, 3));
console.log('Pure function', add(2, 3));
console.log('Pure function', add(2, 3));
// Impure functions: For same input, different result of different output
let myNumber = 5;
// myNumber = myNumber + 2; // 7
// myNumber += 2;

function doSomething(x, y) {
  myNumber++; // 6 myNumber = myNumber + 1
  // myNumber = myNumber + 1;
  // myNumber += 1; 
  //     2 + 3 + 6
  //     2 + 3 + 7
  //     2 + 3 + 8
  return x + y + myNumber;
}

console.log('Impure function', doSomething(2, 3)); // 11
console.log('Impure function', doSomething(2, 3)); // 12
console.log('Impure function', doSomething(2, 3));
console.log('Impure function', doSomething(2, 3));
console.log('Impure function', doSomething(2, 3));





