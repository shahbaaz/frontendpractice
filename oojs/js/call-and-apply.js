const person1 = {
  name: 'Frank',
  // age: 65,
  // sayHello: function () {
  //   console.log('Hello ' + this.name);
  // }
};

const person2 = {
  name: 'John',
  // age: 80
};

// person1.sayHello();

const sayHello = function() {
  console.log('Hello', this.name);
  console.log('Happy Birthday you are', this.age, 'years old');
};

const sayBye = function() {
  console.log('Good Bye', this.name);
}

// sayHello();
// sayBye();

// Call
// sayHello.call(person1);
// sayBye.call(person1);
// sayHello.call(person2);
// sayBye.call(person2);

// sayHello.apply(person1);
// sayBye.apply(person2);

// const saySomething = function (greeting) {
//   console.log(greeting, this.name);
// }

// saySomething('Hi');

// saySomething.call(person1, 'Hi');
// saySomething.apply(person2, ['Bye']);

const saySomething = function (greeting, age) {
  console.log(greeting, this.name);
  console.log('You are ' + age + ' years old');
}

// saySomething('Hi');

saySomething.call(person1, 'Happy Birthday', 66);
saySomething.apply(person2, ['Happy Birthday', 81]);

