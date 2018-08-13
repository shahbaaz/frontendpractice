// To replace an element

// Create an element
const newHeading = document.createElement('h2');

newHeading.id = 'task-title';

// Add text node
newHeading.appendChild(document.createTextNode('Tasks List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Get the parent element
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// To remove an element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
//lis[0].remove();
document.querySelector('.card-title').remove();

// Remove child element
//list.removeChild(lis[2]);

//console.log(lis);

// Classes and attributes
const firstLi = document.querySelector('li:first-child');

// console.log(firstLi.children[0]);

const link = firstLi.children[0];

let val;
// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
//val = link.getAttribute('class');
val = link.setAttribute('href', 'https://yahoo.com');
val = link.hasAttribute('href'); // true
val = link.hasAttribute('title'); // false
link.setAttribute('title', 'Yahoo!');
link.removeAttribute('title');
link.removeAttribute('href');

console.log(val);