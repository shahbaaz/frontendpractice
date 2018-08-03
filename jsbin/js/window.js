myObj = {
  abc: 123,
  cde: 'hello',
  myMethod: function() {
    console.log('I am the method of an object');
  }
};

// console.log(myObj.myMethod());
// console.log(myObj.abc);
//window.console.log(myObj);
// In a browser, the global object is window
//window.console.log(window);
//alert('hello');
// // alert('hi');
// window.console.log(123);
//window.console.log(window.console);
// prompt
// const input = prompt();
// console.log('User entered ', input);

// confirm
// if (confirm('Are you sure?')) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// Window methods / objects / properties
let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // query parameter in url

// Reload
// window.location.href = 'https://yahoo.com';

function redirectToTwitter() {
  window.location.href = 'https://twitter.com';
}

// setTimeout(redirectToTwitter, 5000);

// Reload
// window.location.reload();

// History object
// window.history.go(-3);
val = window.history.length;

// Navigator
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

val = document.body;
// Document object model
console.log(val);