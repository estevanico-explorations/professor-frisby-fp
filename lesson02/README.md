## [Refactor imperative code to a single composed expression using Box](https://egghead.io/lessons/javascript-refactoring-imperative-code-to-a-single-composed-expression-using-box)
> Box alone doesn't do much. It basically captures something in a context. We can keep mapping, and folding, and composing in different ways around it.
> 
> As we'll see, there are stronger things in box. They will give us behaviors associated with composition and new ways to compose. This is good practice to work on something as simple as a structure as box that has no added behaviors, and we can practice composing with it.
> 
> Toy examples but you can see the benefit here. In this case I wouldn't bother to `Box` it up as the one line would be nicer, imo, but when the nesting is deep, well.

A benefit about `Box`y types is that they can unnest deeply nested expressions. So, for example, given the example below we can unneset as seen in the second example:

Example 1a: Nested
```js
const moneyToFloat = str => parseFloat(str.replace(/\$/g, ''))
```

Example 1b: Un nested
```js
const moneyToFloat = str =>
  Box(str)
    .map(s => s.replace(/\$/g, ''))
    .map(r => parseFloat(r))
```


Example 2a: Nested
```js
const applyDiscount = (price, discount) => {
  const cost = moneyToFloat(price)
  const savings = percentToFloat(discount)
  return cost - (cost * savings)
}
```

Example 2b: Un nested
```js
// 1. The functions invoked in here all return a Box
// 2. All the variables are part of closures so we can keep using them
// 3. This would be 2 Boxes deep. Would want to fold our way out.
const applyDiscount = (price, discount) => {
  moneyToFloat(price)
    .map(cost =>
      percentToFloat(discount)
        .map(savings => 
          cost - cost * savings))

const applyDiscount = (price, discount) => {
  moneyToFloat(price)
    .fold(cost =>
      percentToFloat(discount)
        .fold(savings => 
          cost - cost * savings))
}
```