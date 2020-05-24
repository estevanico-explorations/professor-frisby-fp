/**
 * convert moneyToFloat, percentToFloat, applyDiscount to use Box
 */

namespace lesson02 {
  type func<T, U> = (num: T) => U

  const Box = <T>(x: T) => 
  ({
    map: <U>(f: func<T, U>) => Box(f(x)),
    fold: <U>(f: func<T, U>) => f(x),
    inspect: () => `Box(${x})`
  })

const moneyToFloat = (str: String) =>
  Box(str.replace(/\$/g, ''))
    .fold(parseFloat);

const percentToFloat = (str: String) => 
  Box(str.replace(/\%/g, ''))
    .map(parseFloat)
    .fold(n => n * 0.01)


const applyDiscount = (price: String, discount: String) => 
  Box(moneyToFloat(price))
   .fold(cost => 
     Box(percentToFloat(discount))
      .fold(savings => cost - cost * savings)
    )

console.log(moneyToFloat('$100'))
console.log(percentToFloat('10%'))
console.log(applyDiscount('$5.00', '20%'))
console.log(applyDiscount('$200', '20%'))

}
