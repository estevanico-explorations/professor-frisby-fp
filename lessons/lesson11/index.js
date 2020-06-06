// leaving old Box for comparison
const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
})

// wraps a function returning value without executing its call
const LazyBox = g => ({
  // returns function but not evaluate it
  map: f => LazyBox(() => f(g())),

  // compose and evaluate only here!
  fold: f => f(g()),

  inspect: () => `LazyBox(() => g(${x}))`,
})

export const a = Box(100)
  .map(n => n + 1)
  .map(x => `${x}`)
  // .fold(x => x.toLowerCase())

export const b = LazyBox(100)
  .map(n => n + 1)
  .map(x => `${x}`)
  // .fold(x => x.toLowerCase())

  // // every 'map' composes with new function from outside without calling it
  // .map(s => s.trim())
  // .map(r => parseInt(r))
  // .map(i => i + 1)
  // .map(i => String.fromCharCode(i))

  // // compose again and call the function
  // .fold(s => s.toLowerCase())

// console.log(t)
// const nextCharForNumberString = str =>

//   // pass 'str' wrapped into function rather than directly
//   LazyBox(() => str)

//     // every 'map' composes with new function from outside without calling it
//     .map(s => s.trim())
//     .map(r => parseInt(r))
//     .map(i => i + 1)
//     .map(i => String.fromCharCode(i))

//     // compose again and call the function
//     .fold(s => s.toLowerCase())

// console.log(
//   'LazyBox(() => \' 64 \').fold(s => s) : ',
//   LazyBox(() => ' 64 ').fold(s => s)
// )

// console.log(
//   'LazyBox(() => \'       64       \').map(s => s.trim()).fold(s => s) : ',
//   LazyBox(() => '       64       ').map(s => s.trim()).fold(s => s)
// )

// console.log(
//   'LazyBox(() => \'       64       \').map(s => s.trim()).map(r => parseInt(r)).map(i => i + 1).fold(s => s) : ',
//   LazyBox(() => '       64       ').map(s => s.trim()).map(r => parseInt(r)).map(i => i + 1).fold(s => s)
// )

// console.log(
//   'nextCharForNumberString(\' 64 \') : ',
//   nextCharForNumberString(' 64 ')
// )

