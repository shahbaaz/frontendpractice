const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.getElementById('task-title');

// Click
// clearBtn.addEventListener('click', eventHandler);

// Double click
// clearBtn.addEventListener('dblclick', eventHandler);

// Mousedown
// clearBtn.addEventListener('mousedown', eventHandler);

// Mouseup
// clearBtn.addEventListener('mouseup', eventHandler);
// card.addEventListener('mouseenter', eventHandler);

// card.addEventListener('mouseleave', eventHandler);

card.addEventListener('mouseout', eventHandler);

// Event Handler
function eventHandler(event) {
  event.preventDefault();
  console.log(event);
  console.log(`Event Type: ${event.type}`);

  heading.textContent = `MouseX: ${event.x} MouseY: ${event.y}`;

  document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 50)`;
}