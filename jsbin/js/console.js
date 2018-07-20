// alert('hello world');
// window.alert('I am an alert box');
// what is the name of the global object?
// window;
// an oject can have properties and methods
// Single line comment
// comment
/**
 * Multi line
 * comment
 */
console.time('checking');
console.log('hello world!'); // print string
console.log(1234.324); // print number
console.log(false); // print boolean
var greeting = "Salaam";
console.log(greeting); // print a variable
console.log([1,2,{a:3, b:['salaam', 5, 7]},'hi',5,6]); // print an array
console.log({a:1, b:'hi', c:[3,4,5]}); // print an object

//console.table({a:1, b:2, c:3, d:4});
console.table([1,2,{a:3, b:['salaam', 5, 7]},'hi',5,6]);
console.error('This is an error message');
console.warn('This is a warning');
// console.clear();

console.log('Hi');
var myObj = {
  greeting: 'salaam',
  repeat: 5
};
console.log(myObj);
console.log(myObj);
console.log(myObj);
console.log(myObj);
console.timeEnd('checking');
