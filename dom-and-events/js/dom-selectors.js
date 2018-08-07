// DOM selectors for single element
/**
 * in CSS
 * #task-title {
 *  
 * }
 */


// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').className);console.log(document.getElementById('task-title').id);

// // console.log(document.getElementsByClassName('testing'));

// // Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// // // Change conte
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = `<span style="color:red;">Task Listing</span>`;

// const taskTitle = document.getElementById('task-title');

// taskTitle.style.background = 'tomato';
// taskTitle.style.color = 'white';
// taskTitle.style.padding = '10px';
// taskTitle.style.border = '2px solid maroon';

// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = `<strong>Task Listing</strong>`;

// document.querySelector() It selects the first item

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.collection'));
// console.log(document.querySelector('h5'));

// // document.querySelector('li').style.background = 'yellow';
// document.querySelector('ul.collection li').style.color = 'red';

// document.querySelector('li:last-child').style.color = 'green';
// document.querySelector('li:nth-child(odd)').style.background = 'purple';
// document.querySelector('li:nth-child(even)').style.background = 'yellow';

// Selecting multiple elements
// document.getElementsByClassName();
const items = document.getElementsByClassName('collection-item');
console.log(items);

// // first element
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello world';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems[3]);

// document.getElementsByTagName()

// let lis = document.getElementsByTagName('li');
// console.log(lis);

// console.log(lis[0]);
// lis[0].style.background = 'salmon';
// lis[2].style.background = 'tomato';
// lis[3].textContent = 'Get groceries with green masala';

// lis = Array.from(lis);
// myArr = [3,5,8,6];
// console.log(myArr);
// myArr.forEach(function(x) {
//   console.log(x + 2);
// });
// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

// lis.forEach(function(li, index) {
//   console.log(li, index);
//   li.textContent = `${index}: Hello world`;
// });

// document.querySelectorAll();

// const items = document.querySelectorAll('ul.collection li.collection-item');

// console.log(items);

// items.forEach(function(item, index) {
//   item.textContent = `${index} Hello`;
// });

const oddItems = document.querySelectorAll('li:nth-child(odd)');
const evenItems = document.querySelectorAll('li:nth-child(even)');

oddItems.forEach(function(oddItem, index) {
  if (index === 0) {
    oddItem.style.display = 'none';
  }
  oddItem.style.background = 'yellow';
});

for(let i = 0; i < evenItems.length; i++) {
  evenItems[i].style.background = 'purple';
  evenItems[i].style.color = 'white';
}

console.log(oddItems);