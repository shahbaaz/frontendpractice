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




