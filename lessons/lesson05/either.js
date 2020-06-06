/** 
 * Convert getPort to use Either
 * - JSON.parse can fail
 * 
 * Either = Right || Left
 */

export const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  chain: f => f(x),
  inspect: () => `Right(${x})`,
})

export const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  chain: f => Left(x),
  inspect: () => `Left(${x})`,
})

export const fromNullable = x => x != null ? Right(x) : Left(null)

export const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}
