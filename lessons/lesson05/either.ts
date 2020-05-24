/** 
 * Convert getPort to use Either
 * - JSON.parse can fail
 */

// const Either = Right || Left

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  chain: f => f(x),
  inspect: () => `Right(${x})`,
})

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  chain: f => Left(x),
  inspect: () => `Left(${x})`,
})

const fromNullable = x => x != null ? Right(x) : Left(null)

const tryCatch = f => {
  try {
    return Right(f())
  } catch(e) {
    return Left(e)
  }
}

export {
  Right,
  Left,
  fromNullable,
  tryCatch
};
