## [Applicative Functors for multiple arguments](https://egghead.io/lessons/angular-1-x-applicative-functors-for-multiple-arguments)

Applicative Functors, or the function `ap` or `lift1-9` think of it this way: It's a way to apply a function to multiple functors.

For example
```js
// The function to apply
constt add = x => y => x + y

// Use a function
const res = Box(add)
  .ap(Box(2)) // To apply here
  .ap(Box(4)) // And here

// When you get the data out using fold
res.fold(err, deets) // 6
```

Apply the add function to the other
