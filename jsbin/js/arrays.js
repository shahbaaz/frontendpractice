// Create arrays
const numbers = [2,5,76,34,56];
const numbers2 = new Array(34,5,87,234,87);
const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach'];
const mixedArray = [23, 'hello', true, undefined, null, {a: 1, b: 2}, new Date()];
// console.log(numbers);
// console.log(numbers2);
// console.log(fruits);
// console.log(mixedArray);
// let val;
// let myNumber = 56;
// // array length
// val = numbers.length;

// // Check if something is an array
// val = Array.isArray(numbers2);
// val = Array.isArray(myNumber);

// // Get single item from an array
// val = numbers[4];
// val = fruits[3];

// // Insert into an array
// // numbers[2] = 101;
// // numbers[5] = 200;
// val = numbers;

// // find index of a value in array
// val = fruits.indexOf('Almond');

// // Mutating of arrays
// // Add to the end
// fruits.push('Almond');
// val = fruits;

// val = numbers;
// numbers.push(2345);
// val = numbers;

// // Add to the front
// numbers.unshift(98);
// val = numbers;


// // Take element off from the end
// numbers.pop();
// val = numbers;

// // Take element off from the front
// numbers.shift();
// val = numbers;

// splice

// fruits.splice(1, 5);
// val = fruits;

// Reverse
// numbers.reverse();
// val = numbers;

// val = numbers.concat(numbers2);

// // sorting

// val = numbers.sort();

// // Use compare function in sort() method
// val = numbers.sort(function(a,b) {
//   return a - b;
// });

// // Reverse sort or descending order
// val = numbers.sort(function(a, b) {
//   return b - a;
// });

// find
// val = numbers2.find(function(x) {
//   return x < 50;
// });
val = fruits.sort(function(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

console.log(val);