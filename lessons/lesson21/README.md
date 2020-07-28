## [Write applicatives for concurrent actions](https://egghead.io/lessons/javascript-applicatives-for-concurrent-actions)

A way to run an applicative as things are finishing up. 

These are two helper functions. They aren't important.
```js
// Just a reporting function.
export const reportHeader = (p1, p2) => `Report: ${p1.title} compared to ${p2.title}`

// An async function that returns some data (see index.js).
export const Db = () => {}
```

The interesting stuff is here:
```js
 // This is a curried Task to be applied twice within each applicative.
  Task.of(p1 => p2 => reportHeader(p1, p2))

    // This async function will run and finish in, say, 5 seconds
    .ap(Db.find(20))
    
    // Then this async function will run and finish in, say, 10 seconds
    .ap(Db.find(8))

    // Both the applicatives will not run their respective .map() functions
    // until both async methods are finished. Then they will run in order
    // because they are curried (p1 -> p2).

    // When the two .ap() methods finish we'll fork to print the data to screen.
    .fork(console.error, id)
```

This is super useful but I do not care for this interface. Prefer code that returns instead of just print to the screen or having to do silly things to get the data out of the fork and into somewhere else and then be used.
