let re;

// literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // Must start with
re = /d$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Match any one character
re = /h*llo/i; // Match any character zero or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\@/i; // Escape character

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GX]ray/i; // Must be G or F
re = /[^GX]ray/i; // Do not match G or X
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[1-4]+ray/;

// const str = 'hello worlds';
// const str = 'hsdfsdfdsllo';
// const str = 'gray@';
// const str = 'Grey';
// const str = 'Xray';
const str = '41235ray';

// const result = re.test(str);
// console.log(result);

function regTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

regTest(re, str);


