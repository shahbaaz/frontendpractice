// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(2, 3));

// Event bubbling
document.querySelector('#task-title').addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('task title');
});

document.querySelector('.card-action').addEventListener('click', function() {
  console.log('card action');
});

document.querySelector('.card-content').addEventListener('click', function() {
  console.log('card content');
});

document.querySelector('.card').addEventListener('click', function() {
  console.log('card');
});

// Event delegation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// function deleteItem(event) {
//   event.preventDefault();
//   console.log('delete item');
// }

// document.body.addEventListener('click', deleteItem);

// function deleteItem(event) {
//   // console.log(event);
//   event.preventDefault();
//   // if (event.target.className === 'fa fa-remove') {
//   //   console.log('delete item');
//   // }

//   // if (event.target.parentElement.className === 'delete-item secondary-content') {
//   //   console.log('delete item');
//   // }

//   // console.log(event.target.parentElement.classList.contains('delete-item'));
//   if (event.target.parentElement.classList.contains('delete-item')) {
//     // console.log('delete item');
//     event.target.parentElement.parentElement.remove();
//   }
// }
