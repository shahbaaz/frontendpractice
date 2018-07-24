const firstName = 'Sajjad'; // Single quotes
const lastName = 'Khan'; // "khan" double quotes
const subject = `JavaScript`; // template literals
const age = 20;

// console.log(firstName, lastName, subject);
let val;

val = firstName + lastName;

val = firstName + ' ' + lastName;

// Append
val = 'Tariq';
val += ' Quadri';

val = 'Hello, my name is ' + firstName + ' ' + lastName + ' and I am ' + age + ' years old.';

// Escaping
val = 'That\'s awesome!';
val = `That's awesome!`;

val = firstName.length;

val = firstName.concat(' ', lastName);

// Change the case
val = firstName.toUpperCase();
val = lastName.toLowerCase();
let myArray = [3,5,6,7];
val = myArray[0];

// last item

val = firstName.length; // 4 for Sami
val = firstName[3];
// Sami -> indexes: 0 => S, 1 => a, 2 => m, 3 => i
val = firstName[firstName.length - 1];
// firstName[4 - 1]

// indexOf()
val = firstName.indexOf('j');
val = firstName.lastIndexOf('j');
// Sajjad -> indexes: 0 => S, 1 => a, 2 => j, 3 => j, 4 => a, 5 => d

// CharAt()
val = firstName.charAt(2);

// get last character
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(2, 4);

// slice
val = firstName.slice(-4);

// split
tags = 'web**design**web**development**programming**database';
val = tags.split('**');

myString = 'Hi I am Sami, people call me Sami';
// replace
// val = myString;
val = myString.replace('/Sami/i', 'Sajjad');

// includes
val = myString.includes('people');
val = myString.includes('tiger');

// reverse a string
let myString2 = 'Hello world'; 
// reverse => dlrow olleH

// val = myString2.split('').reverse().join('');
val = myString2.split('');
// reverse() method is available only for arrays
val = myString2.split('').reverse();
// join() method is available only for arrays
val = myString2.split('').reverse().join('');

// palindrome: madam, eye, 
myString3 = 'ship';

reverseMyString3 = myString3.split('').reverse().join('');

if (myString3 === reverseMyString3) {
  console.log(myString3 + ' is a palindrome');
} else {
  console.log(myString3 + ' is not a palindrome');
}

console.log(typeof myString2);

console.log(val);
// console.log('Sajjad'.length);