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

console.log(person1.greeting());

console.log(Person.sum(2, 4));
