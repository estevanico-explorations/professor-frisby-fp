## [You've been using Functors](https://egghead.io/lessons/javascript-you-ve-been-using-functors)

_I have a much more indepth explanation of `functors` on my FP guide here (put link in here, why haven't I uploaded that? It's frikkin' ready already damn!)_

## Laws
| Law | Explaination | | 
|:--|:--|:--|
| Composition | Functors preserve composition of morphisms. Meaning If two sequential mapping operations are performed one after the other using two functions, the result should be the same as a single mapping operation with one function that is equivalent to applying the first function to the result of the second. <sup>1<sup> |  |
| | `fx.map(f).map(g) == fx.map(x => g(f(x)))` |
| Identity | Functors must preserve identity morphisms. Meaning that when performing the mapping operation, if the values in the functor are mapped to themselves, the result will be an unmodified functor<sup>1<sup> |  |
| | `fx.map(id) == id(fx)` |


In terms of function composition the next three examples are equivalent:

The normal way
```js
const normal = 'squirrels'.substring(5).toUpperCase()
```

The multiple map way
```js
const res1 = Box('squirrels')
  .map(s => s.substring(5))
  .map(s => s.toUpperCase())
```

A mix of both (but composing right there in the `.map()`)
```js
const res2 = Box('squirrels').map(s => s.substring(5).toUpperCase())
```

### All functors!
Yes, all functors would have this capability and, regardless of interface, they would have to follow the composition rule in order to be considered a functor. You could change `Box()` to `Task()` or `Right()` or `Left()` and they would all work (getting the data out is slightly different for each tho).

## Identity
The second law that must be obeyed in order to be a functor is identity. Meaning that if you map something to itself you get the same functor back.

These are the same (identical)
```js
const res1 = Box('crayons').map(id)
const res2 = id(Box('crayons'))
```

---
1. https://wiki.haskell.org/Functor#:~:text=Functor%20Laws,-Functors%20must%20preserve&text=If%20two%20sequential%20mapping%20operations,the%20result%20of%20the%20second.
