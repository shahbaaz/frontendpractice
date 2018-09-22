// Destructuring

let a, b;

[a, b] = [3, 5];

// console.log(a);
// console.log(b);

// Rest pattern

[a, b, c, ...someVar] = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(someVar);

({a, b} = {a: 33, b: 56, c: 86, d: 644, e: 986});

({a, b, ...restVar} = {a: 33, b: 56, c: 86, d: 644, e: 986});

// console.log(a);
// console.log(b);
// console.log(restVar);

const people = ['John', 'Pablo', 'Henry'];

const [person1, person2, person3] = people;

// console.log(person1);
// console.log(person2);
// console.log(person3);

function getPeople() {
  return ['Javier', 'Brian', 'Diana'];
}

const [person4, person5, person6] = getPeople();

// console.log(person4);
// console.log(person5);
// console.log(person6);

const person = {
  name: 'John Doe',
  age: 43,
  city: 'Panama',
  gender: 'Male'
};

console.log(person.age);

const {name, age, city, gender} = person;

console.log(name);
console.log(age);
console.log(city);
console.log(gender);

