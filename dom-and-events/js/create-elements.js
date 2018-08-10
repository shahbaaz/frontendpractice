// Create the element
const li = document.createElement('li');

// Add a class
li.className = 'collection-item';

// Add an id
li.id = 'new item';

// Add an attribute
li.setAttribute('title', 'New item');

// Create text node and append
li.appendChild(document.createTextNode('Testing 123...'));

// Create a link element
const link = document.createElement('a');

link.className = 'delete-item secondary-content';

link.innerHTML = '<i class="fa fa-remove"></i>';

// Add href attribute
link.setAttribute('href', '#');
// link.href = '#';

li.appendChild(link);

document.querySelector('ul.collection').appendChild(li);

console.log(li);