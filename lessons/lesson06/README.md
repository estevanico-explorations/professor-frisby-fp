## [Create types with Semigroups](https://egghead.io/lessons/javascript-combining-things-with-semigroups)
A `semigroup` is a type with a concat method.

Some examples
```js
const foo = 'a'.concat('b').concat('c')
const bar = [1, 2].concat([3, 4]).concat([5, 6])

console.log(foo) // 'abc'
console.log(bar) // [1, 2, 3, 4, 5, 6]
```
