// DOM selectors for single element
/**
 * in CSS
 * #task-title {
 *  
 * }
 */


// console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById('task-title').className);
// console.log(document.getElementById('task-title').id);

// // console.log(document.getElementsByClassName('testing'));

// // Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // Change content
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

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.collection'));
console.log(document.querySelector('h5'));

// document.querySelector('li').style.background = 'yellow';
document.querySelector('ul.collection li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(odd)').style.background = 'yellow';
document.querySelector('li:nth-child(even)').style.background = 'purple';

