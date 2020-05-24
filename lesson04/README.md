## [Use chain for composable error handling with nested Eithers](https://egghead.io/lessons/javascript-composable-error-handling-with-either)

```js
const tryCatch = f => {
  try {
    // Do something that will fail (ie: run JSON.parse('e'))
  } catch (e) {
    // Do something after that failure was caught
  }
}
```