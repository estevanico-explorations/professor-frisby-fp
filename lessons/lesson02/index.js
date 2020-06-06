const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  inspect: () => `Box(${x})`
})

export const moneyToFloat = (str) => Box(str.replace(/\$/g, ''))
  .fold(parseFloat)

export const percentToFloat = (str) => Box(str.replace(/\%/g, ''))
  .map(parseFloat)
  .fold(n => n * 0.01)

export const applyDiscount = (price, discount) => Box(moneyToFloat(price))
  .fold(cost => Box(percentToFloat(discount))
  .fold(savings => cost - cost * savings))
