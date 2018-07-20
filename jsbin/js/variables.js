// var, let and const
// var name = "Sami Khan"; // = is assignment operator
// console.log(name);
// name = "Irfan";
// console.log(name);
// name = "Sajjad";
// console.log(name);

// // Initializing a variable
// var greeting; // undefined
// console.log(greeting);
// greeting = "Salaam";
// console.log(greeting);

// naming variables
// variables can include letters, numbers, _, $
// variables cannot start with a number
// var 123name = 'Harry'; // through an error
// var name123 = 'Harry';
// console.log(name123);
// var _name = 'Henry';
// console.log(_name);
// var $name = 'Sajjad';
// console.log($name);

// Multi word variables
var firstName = 'Brad'; // camel case (very good)
var my_first_name = 'Paul'; // Underscore
var FirstName = 'Aaquib'; // Pascal case
var firstname; // small case

// let is block scoped
// let name;
// console.log(name);
// name = 'Peter pan';
// console.log(name);
// name = 'Hannah';
// console.log(name);

// // const is also block scoped
// {
//   let greeting = 'hi';
//   console.log(greeting);
// }
// console.log(greeting);

// const name = 'John';
// console.log(name);
// name = 'Johny';
// const greeting; // const must be assigned some value
const person = {
  name: 'John',
  age: 30
};
console.log(person);
person.name = 'Hannah';
console.log(person);
// // Below line is not allowed
// person = {
//   name: 'Hannah',
//   age: 34
// };
const numbers = [1,2,3,4,5];
console.log(numbers);
//numbers = [1,2,3,4,5,6];
numbers.push(6);
numbers.unshift(0);
console.log(numbers);

