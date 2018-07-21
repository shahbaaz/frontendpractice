const num1 = 100;
const num2 = 40;

// 40) 100 (2
//     80
//   ------
//     20
let val;

// Mathematical operations
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
//  greater than 2.5, then it will be 3
// if less than 2.5, then it will be 2
val = Math.round(2.2);
val = Math.ceil(2.4);
val = Math.floor(2.9);
val = Math.sqrt(625);
val = Math.abs(-3); // absolute value |-3| = 3
val = Math.pow(5, 3);
val = Math.min(2,4,5,-2);
val = Math.max(5,6,34,876);
val = Math.random();

// random numbers between 1 and 20
val = Math.floor(Math.random() * 20 + 1);

// random number between 20 to 40
val = Math.floor(Math.random() * 20 + 20);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(val);