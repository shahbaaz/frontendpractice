// Global scope
var x = 1;
let y = 2;
const z = 3;

console.log(`Global scope: x = ${x}, y = ${y}, z = ${z}`);

function test() {
  var x = 4;
  let y = 5;
  const z = 6;
  console.log(`Function scope: x = ${x}, y = ${y}, z = ${z}`);
}

test();

// if (true) {
//   // block scope
//   var x = 4;
//   let y = 5;
//   const z = 6;
//   console.log(`If scope: x = ${x}, y = ${y}, z = ${z}`);
// }

for (var x = 0; x < 10; x++) {
  console.log(`Loop: ${x}`);
}

for (let y = 0; y < 10; y++ ) {
  console.log(`Loop: ${y}`);
}


console.log(`Global scope: x = ${x}, y = ${y}, z = ${z}`);