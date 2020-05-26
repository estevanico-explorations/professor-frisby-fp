## [Ensure failsafe combination using monoids](https://egghead.io/lessons/javascript-failsafe-combination-using-monoids)

Essentially a `monoid` is a `semigroup` with an `.empty()` method.

---

Using a neutral element to act like `Identity`.

```js
export const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`,
})

export Sum.empty = () => Sum(0)

export const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`,
})

export All.empty = () => All(true)
```
