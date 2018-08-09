let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

val = list;

// val = listItem;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Get children element nodes
val = list.children;
val = list.children[1];

list.children[1].textContent = 'Hello world';

// children of children
val = list.children[3].children[0];
list.children[3].children[0].id = 'test-link';

//First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

if (list.childElementCount > 3) {
  list.children[list.childElementCount - 1].remove();
}

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;


console.log(val);