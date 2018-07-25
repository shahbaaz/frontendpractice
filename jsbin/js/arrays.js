// Create arrays
const numbers = [2,5,76,34,56];
const numbers2 = new Array(34,5,87,234,87);
const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach'];
const mixedArray = [23, 'hello', true, undefined, null, {a: 1, b: 2}, new Date()];
// console.log(numbers);
// console.log(numbers2);
// console.log(fruits);
// console.log(mixedArray);
let val;
let myNumber = 56;
// array length
val = numbers.length;

// Check if something is an array
val = Array.isArray(numbers2);
val = Array.isArray(myNumber);

// Get single item from an array
val = numbers[4];
val = fruits[3];

// Insert into an array
numbers[2] = 101;
numbers[5] = 200;
val = numbers;

// find index of a value in array
val = fruits.indexOf('Orange');

console.log(val);