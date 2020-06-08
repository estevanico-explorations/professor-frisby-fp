## [Lift into a Pointed Functor with of](https://egghead.io/lessons/javascript-lifting-into-a-pointed-functor)

No code worth writing or testimg for this lesson so it's all in here.

Basically it's a contract and all it does is simplify a functor's constructor to "lift" a value into it's type.

So, given `Task()`, `Box()` or `Either()` you'll use the `.of()` to get back a the functor. Pretty simple.

```js
Task.of('hello')    // → Task('hello')
Either.of('hello')  // → Either('hello')
Box.of('hello')     // → Box('hello')
```

The last bit here is to explain the naming of `Right` vs `Left`.

> Why did we choose right instead of left?
> 
> That's a terrific question. The reason for this is that one of the contracts or intuitions of of here, is that once I popup a value into my of, I want to be able to start mapping and chaining and using all of those generic interface functions on this value. If this was to return a left, we wouldn't be able to actually map over it.
> 
> It would just ignore maps and chains. That's kind of ignoring the contract of of, which would just lift a value into a type and start working with it as if it's a total success and things work the way they should.

I also think it's because of the way that the code functions.

Given these two examples it'll either (excuse the pun) the Left side or the Right side

This will excecute the `Right` side which includes the `.map()` and `.fold()`
```js
Either.of(5).map(add5).fold(errFn, getFn)
```

Wherease this will execute the `Left` side which will just return the `Either(null)` -> `Left()`
```js
Either.of(null).map(add5).fold(errFn, getFn)
```
