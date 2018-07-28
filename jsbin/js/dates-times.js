let val;

const today = new Date();
let birthday = new Date('12-5-1991 04:30:00');
birthday = new Date('December 5 1991');
birthday = new Date('12/5/1991');

val = today;

val = birthday;

val = today.getMonth(); // 0 based
val = today.getDate();
val = today.getDay(); // starts from sunday: 0, ends on saturday: 6
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

val = today.getTime(); // unix time stamp: amount of milliseconds passed since jan 1 1970


birthday.setMonth(2);
birthday.setDate(22);
birthday.setFullYear(1990);
birthday.setHours(3);
birthday.setMinutes(23);
birthday.setSeconds(24);

val = birthday;

today.setMonth(5);
val = today.getMonth();

console.log(val);
console.log(typeof val);
