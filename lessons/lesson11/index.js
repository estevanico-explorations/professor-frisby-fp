export const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
})

export const LazyBox = g => ({
  map: f => LazyBox(() => f(g())),
  fold: f => f(g()),
  inspect: () => `LazyBox(${g})`,
})
