// const nextCharForNumberString = (str: String) => {
//   const trimmed = str.trim();
//   const number = parseInt(trimmed);
//   const nextNumber = number + 1;
//   return String.fromCharCode(nextNumber)
// }

namespace lesson01 {
  type func<T, U> = (num: T) => U
  const Box = <T>(x: T) => 
  ({
    map: <U>(f: func<T, U>) => Box(f(x)),
    fold: <U>(f: func<T, U>) => f(x),
    inspect: () => `Box(${x})`
  })
  const nextCharForNumberString = (str: String) =>
    Box(str)
      .map(s => s.trim())
      .map(s => parseInt(s))
      .map(i => i + 1)
      .map(i => String.fromCharCode(i))
      .map(c => c.toLowerCase())
      .fold(x => x)


  const result = nextCharForNumberString('  64 ');

  console.log(result);
}

