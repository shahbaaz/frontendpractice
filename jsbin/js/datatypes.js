/**
 * Data types in JavaScript
 * 1. Primitive types
 *    String
 *    Number
 *    Boolean
 *    Null
 *    undefined
 *    Symbols (ES6)
 * 2. Reference types
 *    Arrays
 *    Object literals
 *    Functions
 *    Dates
 *    any other thing...
 * Accessed by reference
 * Objects that are stored on the heap (memory)
 * It's a pointer to a location in memory
 */
// Difference between primitive and reference types
// let name = 'Sajjad';
// console.log(name);
// let name2 = name;
// console.log(name2);
// name2 = 'Irfan';
// console.log(name2);
// console.log(name);

//  let myobj = {a: 1, b: 2, c: 3};
//  console.log(myobj);
//  let myobj2 = myobj;
//  console.log(myobj2);
//  myobj2.d = 4;
//  console.log(myobj2);
//  console.log(myobj);

 // String
 const name = 'John';
 console.log(typeof name);
 // Number
 const age = 30;
 console.log(typeof age);
 // Boolean
 const hasKids = true;
 console.log(typeof hasKids);
 const car = null;
 console.log(typeof car);
 // Undefined
 let something;
 console.log(typeof something);
 // Symbol
 const sym = Symbol();
 console.log(typeof sym);

 // Reference types
 // Arrays
 const hobbies = ['music', 'movies', 'football'];
 console.log(typeof hobbies);
 // Object literal
 const address = {
  city: 'San Francisco',
  state: 'CA'
 };
 console.log(typeof address);
 const today = new Date();
 console.log(today);
 console.log(typeof today);
 console.log(typeof function() { return 'hi'; });



