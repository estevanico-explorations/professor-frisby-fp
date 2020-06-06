export const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`,
})

export const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`,
})

export const First = x => ({
  x,
  concat: () => First(x),
  inspect: () => `First(${x})`,
})

// hmmm, no way to define a neutral element that is first and has no effect
// seems like this must remain a semigroup instead of a monoid
// First.empty = () => First(???)

// I hate this syntax so much. Grouping them so that the above is cleaner.
Sum.empty = () => Sum(0)
All.empty = () => All(true)
