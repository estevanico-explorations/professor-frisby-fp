## [Create types with Semigroups](https://egghead.io/lessons/javascript-combining-things-with-semigroups)
A `semigroup` is a type with a concat method.

Some examples
```js
const foo = 'a'.concat('b').concat('c')
const bar = [1, 2].concat([3, 4]).concat([5, 6])

console.log(foo) // 'abc'
console.log(bar) // [1, 2, 3, 4, 5, 6]
```

It follows the law of associativity. Meaning that it doesn't matter which operation we do first we'll get what we want out of it (addition is a semigroup ie: `a + (b + c) = (a + b) + c`)

```js
const foo = 'a'.concat('b'.concat('c'))
const bar = [1, 2].concat([3, 4].concat([5, 6]))

console.log(foo) // 'abc'
console.log(bar) // [1, 2, 3, 4, 5, 6]
```
