## [Use chain for composable error handling with nested Eithers](https://egghead.io/lessons/javascript-composable-error-handling-with-either)

What we learn here is to use the `.chain()` method. It essentially is just a way to get data out of a deeply nested object because `.map()` will not as it will return a `Box(f(x))`. Think of it like an XRAY :)

```js
Right = (x) => ({
  // Apply a function to something and return it back in the container
  map: (f) => Right(f(x)),

  // Just apply the function to the value as-is and return the value.
  chain: f => f(x),

  // Get the data out.
  fold: (f, g) => g(x),

  // Output info.
  inspect: () => `Right(${x})`,
})
```

For the video in question this is useful when the code has multiple steps that would require the return of multiple containers (ie `Box()`) and you need to get the data out.

For instance, given the following code
```js
(file) =>
  tryCatch(() => fs.readFileSync(file))
    .map(c => tryCatch(() => JSON.parse(c)))
    .fold(e => 3000, c => c.port)
```

We'll get an `undefined` returned because the end of the `tryCatch()` and that will happen within the `.map()` function. Instead, and for syntax sugar, we can use `.chain()` instead so that it'll return the data and we can continue the method chaining (perhaps this is why it got it's name?).

So let's look at the different iterations of each example below

```js
const getPort_Safe = (file) =>
  lesson.tryCatch(() => fs.readFileSync(file))
    .map(c => lesson.tryCatch(() => JSON.parse(c))
      .fold(foldAfterTryCatch, c => c.port)
    )
    .fold(e => 3000, c => c)

console.log(getPort_Safe(BAD_JSON))
```
