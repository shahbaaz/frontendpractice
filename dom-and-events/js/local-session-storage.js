//console.log(window);

// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', 32);
// localStorage.setItem('address', '123 street');

// set session storage item
// sessionStorage.setItem('name', 'Jane');

// get data from local storage
// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('age'));
// console.log(localStorage.getItem('address'));
// console.log(localStorage.getItem('city')); // null

// remove from local storage
// localStorage.removeItem('age');

// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(event) {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  event.preventDefault();
  // console.log('form submit event');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

console.log('TASKS', tasks);

tasks.forEach(function(task) {
  console.log(task);
});
