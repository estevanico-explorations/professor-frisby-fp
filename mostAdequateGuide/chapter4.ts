
// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

var words = (str: string) => str.split(' '); 

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = (arr: string []) => arr.map(words);

console.log(sentences(["Jingle bells Batman smells", "Robin laid an egg"]));

// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.
const match = (what: RegExp | string) => (str: string) => str.match(what);

// var filterQs = function(xs) {
//   return _.filter(function(x) {
//     return match(/q/i, x);
//   }, xs);
// };

const filterQs = (xs: string[]) => xs.filter(match(/q/i));
console.log(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']));

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.

// REFACTOR THIS ONE:
const max = (xs: number[]) => xs.reduce((x, y) => (x > y) ? x : y);

console.log(max([323, 523, 554, 123, 5234]) === 5234);

// Bonus 1:
// ============
// Wrap array's slice to be functional and curried.
// //[1, 2, 3].slice(0, 2)
// var slice = _.curry((start: number, end: number, arr: number[]) => {
//   return arr.slice(start, end);
// });
const slice = (start: number) => (end: number) => <T>(arr: T[]) => arr.slice(start, end);

// Bonus 2:
// ============
// Use slice to define a function "take" that returns n elements from the beginning of an array. Make it curried.
// For ['a', 'b', 'c'] with n=2 it should return ['a', 'b'].
var take = (n: number) => <T>(arr: T[]) => slice(0)(2)(arr);

var take2 = take(2);

console.log(take2(['a', 'b', 'c']));
