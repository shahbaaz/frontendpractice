const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Form submit
// form.addEventListener('submit', runEvent);

// keydown
// taskInput.addEventListener('keydown', runEvent);

// keyup
// taskInput.addEventListener('keyup', runEvent);

// keypress
// taskInput.addEventListener('keypress', runEvent);

// focus
taskInput.addEventListener('focus', runEvent);

// blur
// taskInput.addEventListener('blur', runEvent);

// cut
// taskInput.addEventListener('cut', runEvent);

// paste
// taskInput.addEventListener('paste', runEvent);

// input
// taskInput.addEventListener('input', runEvent);

// change
// taskInput.addEventListener('change', runEvent);

function runEvent(event) {

  console.log(`EVENT TYPE: ${event.type}`);
  console.log(event.target.value);
  document.body.style.backgroundColor = 'red';

  // event.preventDefault();
  // Event bubbling and event delegation
}