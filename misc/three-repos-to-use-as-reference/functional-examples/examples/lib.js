const Box = x => (
  {
    // b2 must be a boxed function Box(f)
    ap: b2 => b2.map(x),

    // f must be from any type a to any type b
    map: f => Box(f(x)),

    // f must be from any type a into the boxed type Box(a)
    chain: f => f(x),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  }
)


const Right = x => (
  {
    ap: b2 => b2.map(x),

    // Right applies f to x
    map: f => Right(f(x)),

    // applies the function on the right and returns raw value
    fold: (f, g) => g(x),

    // custom getter function -- called by console.log
    inspect: () => `Right(${x})`
  }
)

const Left = x => (
  {
    ap: b2 => b2.map(x),

    // Left ignores f, simply passes x itself
    map: f => Left(x),

    // applies the function on the left and returns raw value
    fold: (f, g) => f(x),

    // custom getter function -- called by console.log
    inspect: () => `Left(${x})`
  }
)


// ensure null will always go Left
const fromNullable = x =>
  x != null ? Right(x) : Left(null)

const Either = x =>
  null == x ? Left(x) : Right(x)

module.exports = { Box, Either, Right, Left, fromNullable }
