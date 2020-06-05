## [A curated collection of Monoids and their uses](https://egghead.io/lessons/javascript-a-curated-collection-of-monoids-and-their-uses)

Hey, the examples are within the codebase. Run `yarn test:09` to see them run and tinker while you're there. Being that this is an example lesson I am using some common code which is located in `../common`.

One cool one is `find()`. Imagine `List` as an `array` instead of the exported function from `immutable-ext`.

```js
const find = (xs, f) => List(xs).foldMap(
  x => First(f(x) ? Right(x) : Left()),
  First.empty()

  // Returns an Either which you still need to fold out of.
).fold(x => x)

console.log(find([3, 4, 5, 6, 7], x => x > 4))
// Returns a Right(5)
```
This is super cool because what we're doing is
1. Looping though each item and
  1. If the return value from the callback is `true` then return a `Right()` of that value
  1. Otherwise a `Left()`
1. Fold out the value when finished

This is, of course, a lot of work to get the first element that is greater than the user supplied callback but it's still cool. This should be doable with a `.reduce()` method tho.

---
Oh, and some functions all using `.reduce()`.
```js
export const sum = xs => xs.reduce((acc, x) => acc + x, 0)
export const all = xs => xs.reduce((acc, x) => acc && x, true)
export const first = xs => xs.reduce((acc, x) => acc)

console.log('sum([1,3,4]) : ', sum([1, 3, 4]))
console.log('all([true, false, true]) : ', all([true, false, true]))

// unsafe if empty array is provided,
// because no Monoid structure
console.log('first([1,3,4]) : ', first([1, 3, 4]))
```
