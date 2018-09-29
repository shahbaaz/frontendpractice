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

// Square Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GX]ray/i; // Must be G or F
re = /[^GX]ray/i; // Do not match G or X
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[1-4]+ray/;
re = /[0-9]+ray/;

// Flower Brackets {} - Quantifiers
re = /hel{3}o/i; // Must occur exactly {m} number of times
re = /hel{2,4}o/i; // Must occur minimum {m} to maximum {n} number of times in {m,n}
re = /hel{2,}o/i; // Must occur at least {m} number of times

// Parenthesis - Grouping
re = /([0-9]x){3}/;

// Shorthand character classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // one or more
re = /\W/; // Non-word character
re = /\d/; // Match any digit
re = /\D/; // Match any non-digit
re = /\s/; // Match whitspace char
re = /\S/; // Match non-whitespace char

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x if not followed by y

// const str = 'hello worlds';
// const str = 'hsdfsdfdsllo';
// const str = 'gray@';
// const str = 'Grey';
// const str = 'Xray';
// const str = '41235ray';
// const str = 'helllo';
// const str = '5x9x3x';
// const str = 'xyz';
// const str = '%';
// const str = '6';
// const str = '5';
// const str = ' ';
const str = 'xyz';

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


