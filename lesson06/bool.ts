
  interface Bool {
    x: boolean;
    concat: (other: Bool) => Bool
    inspect: () => string
  }

  type BoolMonad = (x: boolean) => Bool

  const All: BoolMonad = x => 
   ({
     x,
     concat: (other: Bool) => All(x && other.x),
     inspect: () => `Bool(${x})`
   })

  interface First<T> {
    x: T;
    concat: (other: any) => First<T>
  }

  type FirstMonad = <T>(x: T) => First<T>
  
  const First: FirstMonad = <T>(x: T) => 
   ({
     x,
     concat: (other: any) => First(x),
     inspect: () => `First(${x})`
   })

  const True: Bool = {
    x: true,
    concat: (other: Bool) => other,
    inspect: () => `True`
  }

  const False: Bool = {
    x: false,
    concat: (other: Bool) => False,
    inspect: () => `False`
  }

  console.log(`should be false`, True.concat(False));
  console.log('should be false', True.concat(False).concat(True));
  console.log(`should be true`, True.concat(True));
  console.log(`should be false`, All(true).concat(All(false)));
  console.log('should be false', All(true).concat(All(false)).concat(All(true)));
  console.log(`should be true`, All(true).concat(All(true)));
  console.log(First('blah').concat(First('carrot')).concat(First(123)))

export {
  First,
  All,
}
