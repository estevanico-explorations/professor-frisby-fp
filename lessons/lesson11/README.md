## [Delay Evaluation with LazyBox]()
So this is important and super cool. I love this a bunch and I think you will to.

* `Box()` invokes it's functions immediately.
* `LazyBox()` doesn't.

That's the big difference and that's huge. HUGE.

Imagine trying to manage state and it's changing immediatly from defining a function. What a hassle. So let's take a look at `Box()` first again and then `LazyBox()`.

## Api
### Original Box
```js
const Box = x => ({
  // Code in here will be immediately run.
  map: f => Box(f(x)),
  fold: f => f(x),
})
```

### Lazy Box
```js
const LazyBox = g => ({
  // Code in here will NOT be immediately run.
  map: f => LazyBox(() => f(g())),

  // It won't run until you call this method.
  fold: f => f(g()),
})
```

## Example 1 - `Box()`

```js
const boxRes1 = Box('THIS IS SOME TEXT')
  .map(s => {
    console.log('aaaaaaaa', s)
    return s
  })
  // .fold(s => s.toLowerCase())

console.log(boxRes1)
```

In this code you'll see 2 things in the console.
```
aaaaaaaa THIS IS SOME TEXT
Box(THIS IS SOME TEXT)
```

If you run the fold function you'll get the data out (`this is some text`) but that isn't the point of this example.

The point is that they both ran. That's such a hassle. Coding is so much easier when everything is setup then run. Think dominino chain reaction. You set everything up beforehand and then EVENTUALLY flick the first one and everything is set into motion. Then you're a proud daddy/mommy/themmy.

Then let's look at the `LazyBox()` version which allow for just that.

## Example 2 - `LazyBox()`
```js
const lazy = LazyBox(() => ' 64 ')
  .map(s => {
    console.log('aaaaaaaa', s)
    return s
  })
  // .fold(s => s.toLowerCase())

console.log(lazy)
```

If you run that the output is different from `Box()`. Just the `.inspect()` method runs. So we've proven that it's properly lazy. Let's run the fold function.
```
LazyBox(() => f(g()))
```

## Example 3 - Run it with `LazyBox().fold()`
```js
const lazy = LazyBox(() => 'this is some text')
  .map(s => {
    console.log('aaaaaaaa', s)
    return s
  })
  .fold(s => s.toLowerCase())

console.log(lazy)
```

Now we ran the `.fold()` method and all the functions run including the `console.log()` in the `.map()` method. NEAT!
```
aaaaaaaa this is some text
this is some text
```

![](https://i.imgur.com/nEEFbrh.gif)
