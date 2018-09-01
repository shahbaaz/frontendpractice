// Constructor functions
// function Person() {
//   this.name = 'John';
//   console.log(this);
// }

// //console.log(this);
// const john = new Person();
// console.log(john.name);
// const steve = new Person();
// console.log(steve.name);

// console.log(this);

// function Person(name, age) {
//   this.name = name;
//   this.age = age
//   console.log(this);
// }

// const myObj = { abc: 123 };

// const john = new Person('john', 34);
// // console.log(john);
// const steve = new Person('steve', 35);
// console.log(steve.name);

// const today = new Date('5-5-2018');
// console.log(today);

// Builtin constructors in JavaScript

// String
const name1 = 'John';
const name2 = new String('John');

// console.log(name1);
// console.log(name2);

// console.log(typeof name1);
// console.log(typeof name2);

// if (name1 === 'John') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// if (name2 == 'John') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }


// if (name2 === 'John') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// Number
const num1 = '5';
const num2 = new Number('5');

// console.log(typeof num1);
// console.log(num2);

// Boolean
const bool1 = false;
const bool2 = new Boolean(true);

// console.log(typeof bool1);
// console.log(typeof bool2);

// Object
const john1 = {
  name: 'John'
};

const john2 = new Object({ name: 'John' });

// console.log(john1);
// console.log(john2);
// console.log(john1 === john2);

// Arrays
const arr1 = [1,3,5,7];
const arr2 = new Array(1,2,3,4,5);

// console.log(arr1, arr2);

// Regular expression
const re1 = /\w+/ig;
const re2 = new RegExp('\\d+');

// console.log(re1);
// console.log(re2);

// Date
const today = new Date();
// console.log(today);

// User defined constructor functions
// this keyword

// console.log(window);
// console.log(this);

// window.alert('hi');
// this.alert('hello');

// const john = {
//   name: 'John'
// };

// function Person() {
//   this.name = 'John';
//   console.log(this);
// }

// const john = new Person();

// console.log(john.name);

// function Person(name) {
//   this.name = name;
//   const age = 32;
//   this.getAge = function() {
//     return age;
//   }
// }

// const john = new Person('John');

// console.log(john.getAge());

function Car(make, model) {
  this.make = make;
  this.model = model;
//camry.model
}

const camry = new Car('Toyota', 'Camry XLE');
const myCar = new Car('Mercedes Benz', 'E 320');

// console.log(myCar);
// console.log(camry.model);
// console.log(myCar.make);

const myObj = [
  { prop1: 'val1', prop2: ['abc', 'cde', 'efg'] },
  { prop1: 'val2', prop2: ['abcd', 'cdef', 'efg'] },
  { prop1: 'val3', prop2: ['abce', 'cdfe', 'effg'] },
  { prop1: 'val4', prop2: ['abcj', 'cde', 'effg'] },
  { prop1: 'val5', prop2: ['abct', 'cde', 'effg'] },
];
/**
 * <MyComponent prop={myObj} />
 */


//  function Person(name, dob) {
//   this.name = name;
//   this.birthday = new Date(dob);
//   this.getAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return ageDate.getUTCFullYear() - 1970;
//   };
//  }

//  const john = new Person('John', '08-29-1936');

//  console.log(john.getAge());

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const john = new Person('John', 'McCain');
console.log(john.getFullName());
console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('getFullName'));
console.log(Person.prototype.constructor);

const steve = new Person('Steve', 'Jobs');
console.log(steve);

// Prototypal inheritance
// Object.prototype
// Person.prototype
// Calling object direct properties
const myArr = [1,2,33,5];
myArr.push(6);
console.log(myArr);







