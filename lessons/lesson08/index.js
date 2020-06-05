/* eslint-disable no-unused-vars */

export const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: _ => `Sum(${x})`,
})

export const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: _ => `All(${x})`,
})

export const First = x => ({
  x,
  concat: _ => First(x),
  inspect: _ => `First(${x})`,
})

// hmmm, no way to define a neutral element that is first and has no effect
// seems like this must remain a semigroup instead of a monoid
// First.empty = _ => First(???)

// I hate this syntax so much. Grouping them so that the above is cleaner.
Sum.empty = _ => Sum(0)
All.empty = _ => All(true)
