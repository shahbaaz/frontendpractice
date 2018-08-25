// console.log('APP.JS FILE INITIALIZED!')
// Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask);

  // Clear tasks event
  clearBtn.addEventListener('click', clearTasks);

  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);

  // Filter task event
  filter.addEventListener('keyup', filterTasks);

}



//console.log(form);

function addTask(event) {
  if(taskInput.value === '') {
    alert('Input field is empty. Add a task!');
  }

  // Create li element
  const li = document.createElement('li');
  // Add a class
  li.className = 'collection-item';
  // Create a text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create a link element
  const link = document.createElement('a');
  // Add classes
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  taskList.appendChild(li);

  // Store tasks in local storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input field
  taskInput.value = '';

  event.preventDefault();
}

// Store a task in local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove a task
function removeTask(event) {
  // console.log(event.target);
  if (event.target.parentElement.classList.contains('delete-item')) {
    // console.log(event.target);
    if (confirm('Are you sure, you want to delete?')) {
      event.target.parentElement.parentElement.remove();

      // Remove task from local storage
      removeTaskFromLocalStorage(event.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  console.log(taskItem.textContent);
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  console.log(tasks);

  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

function clearTasks(event) {
  event.preventDefault();

  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  localStorage.clear();
}

// Get tasks from localstorage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    // Create li element
    const li = document.createElement('li');
    // Add a class
    li.className = 'collection-item';
    // Create a text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create a link element
    const link = document.createElement('a');
    // Add classes
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    taskList.appendChild(li);
  });

  // console.log(tasks);

}

// Filter tasks
function filterTasks(event) {
  const text = event.target.value.toLowerCase();

  console.log(text);
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });


}