// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.greeting = function() {
  //   return `Hello there ${this.firstName} ${this.lastName}`;
  // }
}

Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
const person2 = new Person('William', 'Shakespere');

console.log(person1.greeting());
// console.log(person2.greeting());

// Employee constructor
function Employee(firstName, lastName, phone, jobType) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.jobType = jobType;
}

// Inherit the Person prototype methods
Employee.prototype = Object.create(Person.prototype);

// Make employee.prototype return Employee()
Employee.prototype.constructor = Employee;

// Create an employee object
const employee1 = new Employee('Steve', 'Wozniak', '888-888-8888', 'CTO');

console.log(employee1);

Employee.prototype.greeting = function() {
  return `Hi ${this.firstName} ${this.lastName}, welcome to our company`;
}

console.log(employee1.greeting());
