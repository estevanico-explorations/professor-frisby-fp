## [Enforce a null check with composable code branching using Either](https://egghead.io/lessons/javascript-composable-code-branching-with-either)

An `Either` is _either_ a `Right` or `Left` "container". Or `functor`. We do not, though, actually need to create an `Either` instance. We set a value to one of the other two types and then handle the left or right side depending on what we need to do.

Another way to put it is that an `Either` is a [`disjunction`](https://www.mathgoodies.com/lessons/vol9/disjunction).
> Definition: A disjunction is a compound statement formed by joining two statements with the connector OR. The disjunction "p or q" is symbolized by pq. A disjunction is false if and only if both statements are false; otherwise it is true. The truth values of pq are listed in the truth table below.

Here are the simple definitions:

```js
const Right = (x) => ({
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
})

const Left = (x) => ({
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
});
```

For instance we have this function called `fromNullable` which, for all intents and purposes, could also be called `Either` determines the path the value will go. Does it have a value? Then it goes to the `Right` otherwise it goes `Left`.

```js
const fromNullable = (x) => (
  x != null
    ? Right(x)
    : Left(null)
)
```

### Something important to note
The `Right`'s `fold()` method looks like such:
```js
  const (f, g) => g(x)
```

While the `Left`'s `fold()` method looks like such:
```js
  const fold = (f, g) => g(x)
```

First param is the error case while the second param actually does something. 

### Run tell dat
Notice that the function signature is exactly the same for both `Right` and `Left`. That means that we can call `Fold` without having to do special cases for either (pun intended) functor w/o breaking our code or the running code. We just have to pass a function to both parameters so as to handle each case w/o cause.

In this hard coded example below we handle both lines of code the same but one does the operations the other does nothing.

```js
const errCase = x => 'error'
const happyPath = x => x

const good = Right(200).fold(errCase, happyPath)
const errd = Left(200).fold(errCase, happyPath)
```

The best example I can think of for how great doing this would be to look at an array.

```js
[].map(fn)
[1, 2, 3, 4, 5].map(fn)
```

The first and second one both work like a charm and wouldn't break. You don't have to do any extra thinking as to how to work with them. If it's empty and you apply a function through the `map` functor nothing happens. The function isn't applied. You get an empty array back. Or, rather, an empty container back. 

Now think of how you've written code where you've had to check the existance of that value every time. `null.map(fn)`. You've had to do null checks before. Now you wouldn't have to do that all the time just use the singular `Either` interface and you're set bud!

