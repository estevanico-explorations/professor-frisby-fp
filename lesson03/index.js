console.clear()

const Right = (x) => ({
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
})

// Right() is the happy path. If you set up Right() with a value then map over
// it you'll apply the function proficed as such in the example:
const rightTest = Right(3).map(x => x + 1)
console.log(rightTest)
console.log()

const Left = (x) => ({
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
});

// Left() doesn't run the function in map. Meaning that if you call fold()
// on the value you'll just get the result back. For example:
const leftTest = Left(3).map(x => x + 1)
console.log(leftTest)
console.log()

const fromNullable = (x) => x != null ? Right(x) : Left(null)
const resultGood = Right(2).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x)
const resultError = Left(2).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x)

console.log('Good result returns:', resultGood)
console.log('Bad result returns:', resultError)
console.log()

const findColor = (name) => fromNullable(({
  red: '#ff4444',
  blue: '#3b5998',
  yellow: '#fff68f',
})[name])

// findColor('123').fold(console.log)
// findColor('red').fold(null, console.log)

const result1 = findColor('red')
  .map(c => c.slice(1))
  .fold(
    // e => Either
    e => 'no color',

    // o => Or
    o => o.toUpperCase()
  )

console.log(result1)

