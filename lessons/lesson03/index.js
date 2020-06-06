export const Right = (x) => ({
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
})

export const Left = (x) => ({
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
})

export const fromNullable = (x) => x != null ? Right(x) : Left(null)

export const findColor = (name) => fromNullable(({
  red: '#ff4444',
  blue: '#3b5998',
  yellow: '#fff68f',
})[name])
