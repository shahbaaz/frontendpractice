const person = {
  'first%name': 'John',
  lastName: 'Doe',
  age: 23,
  email: 'john.doe@panama.com',
  hobbies: ['hacking', 'surfing', 'breaking', 'flying'],
  address: {
    city: 'Santa Cruz',
    state: 'CA'
  },
  getBirthYear: function() {
    return 2018 - this.age; // 1995
  }
};

let val; 

val = person;

val = person['first%name'];
val = person.lastName;
val = person.age;
val = person.hobbies[3];
val = person.address.city;
val = person.address['state'];
val = person.getBirthYear();

// console.log(val);

console.log(Object.keys(person)[4]);
// console.log(Object.values(person));

// Array Collection
const people = [
  { name: 'Steve', age: 64 }, // index = 0
  { name: 'Bill', age: 68 }, // index = 1
  { name: 'Jeff', age: 58 } // index = 2
];

// console.log(people[0]);

// const fruits = ['banana', 'apple', 'orange', 'mango'];
// // 0 => banana
// // 1 => apple
// // 2 => orange
// // 3 => mango

// console.log(fruits[3]);

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name, people[i].age);
// }
/**
 * i = 0
 * i = 1
 * i = 2
 * people.length is 3
 * i++ is i = i + 1;
 */