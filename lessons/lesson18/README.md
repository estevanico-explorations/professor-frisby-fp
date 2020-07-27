## [Applicative Functors for multiple arguments](https://egghead.io/lessons/angular-1-x-applicative-functors-for-multiple-arguments)

Applicative Functors, or the function `ap` or `lift1-9`, essentially applies a function to another container/box. Think of it this way: It's a way to apply a function to multiple functors. 

I realize that doesn't help. I will illustrate this a bit better, I hope.

So, an `applicative` can work against a sigle functor but it's real power comes when you apply it to multiple. So, imagine you have 2 functors (boxes/containers) where you want to add the values of both of them together.
```js
Box(2) + Box(4)
```

You can't do that the way the way that it's built. You'd have to map over each one individually. What if we had an easier way? Welp, that's why we have `applicatives` or the function `.ap()`


```js
// The function to to our functors.
const add = x => y => x + y

// Use a function
const res = Box(add)
  .ap(Box(2)) // To apply here
  .ap(Box(4)) // And here

// When you get the data out using fold
res.fold(err, deets) // 6
```

Hey, notice how the function is curried. That allows for this to work at all. 

------

```js
const res = Box(x => x + 1).ap(Box(2)) // = 3
```

Applicative Functor would be a Box that takes a function value (not regular value) so that we can apply that to each `ap()` `Box()` value

Also, the function that is passed initially would have to be curried so that it can be partially applied as you go.


## Law
`F(x).map(f) == F(f).ap(F(x))`


`liftA2` => 
```js
const liftA2 = (f, fx, fy) => fx.map(f).ap(fy)

const liftA2(add, Box(2), Box(4))
```
