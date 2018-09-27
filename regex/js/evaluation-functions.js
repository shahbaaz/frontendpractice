// Regular expressions
// console.log('regular expressions');
let re;
// re = /hello/;
re = /quas/i; // is is for case insensitive
// re = /hello/ig;
// re = new RegExp('hello');
console.log(typeof re);
console.log(re.source);

// HeLlo, hello world something world hello

// exec() - Returns the result in an array or null
// const myStr = 'hello world hello Hello';
// const myStr = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem deserunt repellat doloribus ratione similique ipsa iusto eos nobis quas quidem perspiciatis, laboriosam iste aperiam maxime numquam distinctio nostrum, eaque quo.`;

// const result = re.exec(myStr);

// if (result === null) {

// }

// console.log(result);

// test() - Returns true or false
// const myRe = /value/i;
// const result = myRe.test('something somewhere somevalue');


// console.log(result);
// match() - Returns the result in an array or null
// const myReg = /hello/i;
// const str = 'Hello there';
// const result = str.match(myReg);

// console.log(result);
// search() - Returns index of the first match. If not found returns -1
// const myRegexp = /world/i;
// const str = 'something hello world';
// const result = str.search(myRegexp);
// console.log(result);

// if (result === -1) {

// }

// replace() - Returns a new string with some or all of the matches
const str = 'Hello there some other there my there';
const myRegex = /there/gi;
const newStr = str.replace(myRegex, 'World');

console.log(newStr);