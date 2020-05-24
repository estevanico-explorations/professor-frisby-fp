import * as fs from 'fs';

namespace lesson04 {
  type func<T, U> = (num: T) => U

  const Right = <T> (x: T) =>
    ({
      chain: f => f(x),
      map: <U>(f: func<T, U>) => Right(f(x)),
      fold: <U>(f: func<T, U>, g: func<T, U>) => g(x),
      inspect: () => `Right(${x})`,
    })

  const Left = <T>(x: T) =>
    ({
      chain: f => Left(x),
      map: <U>(f: func<T, U>) => Left(x),
      fold: <U>(f: func<T, U>, g: func<T, U>) => f(x),
      inspect: () => `Left(${x})`,
    })

  const fromNullable = (x: any) =>
    x != null ? Right(x) : Left(null)

  const tryCatch = (f: any) => {
    try {
      return Right(f())
    } catch(e) {
      return Left(e)
    }
  }

  const getPort = () => 
    tryCatch(() => fs.readFileSync('lesson04/config.json'))
      .chain(c => tryCatch(() => JSON.parse(c)))
      .fold(e => 3000, c => c.port)

  const result = getPort();
  console.log(result);

}
