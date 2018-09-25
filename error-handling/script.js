// console.log('error handling');

// const myError = new Error('My JavaScript error');

const myError = Error('My new JavaScript error');

// console.log(myError);

const myObj = {
  abc: 124,
  cde: 456
};

function sum(a, b) {
  return a - b;
}


try {
  // ReferenceError
  // myFunction();

  // TypeError
  // null.myFunction();
  // myObj.something();

  // SyntaxError
  // throw SyntaxError('I am the syntax error');
  // eval('hello world');

  // URIError
  // decodeURIComponent('%');

  if (myObj.something) {
    console.log('We have something in myObj');
  } else {
    throw new SyntaxError('myObj has no something');
  }

} catch(e) {
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log('REFERENCE ERROR', e instanceof ReferenceError);
  console.log('TYPE ERROR', e instanceof TypeError);
  console.log('SYNTAX ERROR', e instanceof SyntaxError);
  console.log('URI ERROR', e instanceof URIError);
}

// logical error
console.log(sum(7, 6));