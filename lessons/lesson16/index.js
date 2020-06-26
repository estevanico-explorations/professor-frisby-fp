console.clear()

export const fold = box => box.fold(i => i)

export const Box = x => ({
  ap: b2 => b2.map(x),
  map: f => Box(f(x)),
  chain: f => f(x),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

// uwrapping Box,
// i.e. takes Box(x) and returns x
export const chain = m => m.chain(x => x)

