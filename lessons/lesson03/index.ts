
namespace lesson03 {
  type func<T, U> = (num: T) => U

  // type Either = Right | Left;

  const Right = <T>(x: T) =>
    ({
      map: <U>(f: func<T, U>) => Right(f(x)),
      fold: <U>(f: func<T, U>, g: func<T, U>) => g(x),
      inspect: () => `Right(${x})`,
    })

  const Left = <T>(x: T) =>
    ({
      map: <U>(f: func<T, U>) => Left(x),
      fold: <U>(f: func<T, U>, g: func<T, U>) => f(x),
      inspect: () => `Left(${x})`,
    })

  const fromNullable = (x: any) =>
    x != null ? Right(x) : Left(null)


  const result = Left(2).map(x => x + 1).map(x => x / 2).fold<string | number>(x => 'error', x => x);

  console.log(result)

  const findColor = (name: string) =>
    fromNullable(({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' })[name])

  // console.log(
  //   findColor('meow').map(color => color.slice(1)).fold(_ => 'no color', c => c.toUpperCase())
  // )
}
