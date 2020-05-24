import fs from 'fs'

// Something people won't like is the .fold() function to get the data
// out of the container. Arrays can use the special [] syntax. But this is no
// different than using .get() functions and honeslty it's better. You apply
// a transform method to it when needed.
export const Right = (x) => ({
  chain: f => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
})

export const Left = (x) => ({
  chain: f => Left(x),
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
})

export const fromNullable = (x) => x != null ? Right(x) : Left(null)

export const tryCatch = (f) => {
  try {
    return Right(f())
  }
  catch (e) {
    return Left(e)
  }
}

// ------------------------------------------------------------------------
// TESTABLE METHODS
export const getPort_Unsafe = (file) => {
  try {
    const str = fs.readFileSync(file)
    const config = JSON.parse(str)
    return config.port
  }
  catch (e) {
    return 3000
  }
}

export const getPort_MostlySafe = (file) =>
  tryCatch(() => fs.readFileSync(file))
    .map(c => JSON.parse(c))
    .fold(e => 3000, c => c.port)

// The output of the two methods here is that the more functional one is
//    1. Composable
//    2. More testable
export const getPort_Safe = (file) =>
  tryCatch(() => fs.readFileSync(file))
    .chain(c => tryCatch(() => JSON.parse(c)))
    .fold(e => 3000, c => c.port)