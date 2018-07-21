//console.log('page is loaded');

// type conversion
// let someVariable = 34;
// someVariable = 'some string';
// someVariable = false;
// console.log(typeof someVariable);

let val;

// Number to string
val = 5;
val = String(5);
val = String(566);
val = String(4+6);

// Boolean to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4,5]);

// toString()
val = (5).toString();
val = (false).toString();

// String to Number
val = Number('5');

// Boolean to Number
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('');
val = Number('hello'); // NaN

val = parseInt('100.23');
val = parseFloat('100.23456');

console.log(val);
console.log(typeof val);
// val = 'hello';
// console.log(val);
// console.log(val.length);
console.log(val.toFixed(4));

// Type coersion
// const val1 = String(5);
// const val2 = 4;

// const sum = val1 + val2; // + becomes concatenation operator

// console.log(5 + 4);

// console.log(sum);
// console.log(typeof sum);
