// let j = 1;

// // j = j + 1;
// // j += 1;

// j++;

// console.log(j);

console.log('LOOPS');

// for(let i = 0; i < 10; i++) {

//   if (i === 4) {
//     console.log('4 is my favorite number');
//     continue;
//   }

//   // if (i === 5) {
//   //   console.log('stop the loop');
//   //   break;
//   // }

//   console.log('Number ' + i);
// }

// While loop
// let i = 10;

// while (i < 10) {
//   console.log('Number is ' + i);
//   i++;
// }

// do while loop
// do {
//   console.log('Number is ' + i);
//   i++;
// } while (i < 10);

// loop through the arrays
const cars = ['Camry', 'Accord', 'Mercedes Benz', 'Audi', 'bmw'];

// console.log(cars[2]);

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// cars.forEach(function(car) {
//   console.log(car);
// });

// for in loop
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
};

// user.firstName or user['firstName']

for (let prop in user) {
  // console.log(prop);
  console.log(`${prop}: ${user[prop]}`);
}

const users = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 40 },
  { id: 2, firstName: 'Steve', lastName: 'Jobs', age: 64 },
  { id: 3, firstName: 'Bill', lastName: 'Gates', age: 69 },
  { id: 4, firstName: 'Jeff', lastName: 'Bezos', age: 57 }
];

const lastNames = users.map(function(user) {
  return user.lastName;
});

console.log(lastNames);












