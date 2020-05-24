console.clear()

import fs from 'fs'

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

const getPort = () => tryCatch(() => fs.readFileSync('./data.json'))
  .chain(c => tryCatch(() => JSON.parse(c)))
  .fold(e => 3000, c => c.port)

const result = getPort()
console.log(result)
