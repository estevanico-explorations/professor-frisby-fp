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