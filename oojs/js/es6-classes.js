class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  static sum(a, b) {
    return a + b;
  }

}

const person1 = new Person('john', 'doe', '4-3-1981');

// console.log(person1.greeting());

// console.log(Person.sum(2, 4));

class Employee extends Person {
  constructor(firstName, lastName, dob, phone, jobType) {
    super(firstName, lastName, dob);
    this.phone = phone;
    this.jobType = jobType;
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(name) {
    this.firstName = name;
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(name) {
    this.lastName = name;
  }

  getDob() {
    return this.dob;
  }

  setDob(birthDate) {
    this.dob = new Date(birthDate);
  }

  getPhone() {
    return this.phone;
  }

  setPhone(phoneNumber) {
    this.phone = phoneNumber;
  }

  getJobType() {
    return this.jobType;
  }

  setJobType(job) {
    this.jobType = job;
  }


  greeting() {
    return `Welcome to the white house President ${this.firstName} ${this.lastName}`;
  }
}

const employee1 = new Employee('Frank', 'Underwood', '8-3-1964', '888-888-9999', 'President');

// console.log(employee1);
// console.log(employee1.greeting());
// console.log(employee1.getFirstName());
// console.log('President resigned!');
// employee1.setFirstName('Claire');
// console.log(employee1.getFirstName());
// console.log(employee1.greeting());
// console.log(employee1.getPhone());
// employee1.setPhone('999-999-9999');
// console.log(employee1.getPhone());

// Arrow functions
// const sayHello = function() {
//   console.log('Hello');
// };

// const sayHello = () => {
//     console.log('Hello');
// };

// const sayHello = () => console.log('Hello');



// const sayHello = () => 'hello';

// const sayHello = () => ({ msg: 'Hello' });

// console.log(sayHello());

const sayHello = (name) => `Hello ${name}`;

console.log(sayHello('John'));

const arr = [2, 3, 5, 7];

// const twoTimesArr = arr.map(function(item) {
//   return item * 2;
// });

const twoTimesArr = arr.map(item => item * 2);

console.log(twoTimesArr);