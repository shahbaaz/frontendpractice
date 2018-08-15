// document.querySelector('.clear-tasks').addEventListener('click', function(event) {
//   console.log('Button is clicked!');
//   event.preventDefault();
// });


document.querySelector('.clear-tasks').addEventListener('click', handleClick);

function handleClick(event) {
  // console.log('Click event happened!');
  event.preventDefault();
  let val;
  val = event;

  // Event target element
  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  event.target.innerText = 'CLEAR TODO ITEMS';

  // Event type
  val = event.type;

  // Timestamp
  val = event.timeStamp;
  console.log(event);

  // Coordinates 
  val = event.clientY;
  val = event.clientX;

  // Offset
  val = event.offsetY;
  val = event.offsetX;
  

  console.log(val);
}

