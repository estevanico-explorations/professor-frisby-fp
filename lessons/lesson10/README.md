## [Unbox types with foldMap](Unbox types with foldMap)

**_Note_**: He doesn't get into `foldMap` in here. Not the function specifically.

<!-- 00:49 Wait. I thought fold took a function.

00:51 Ah, yes. Fold is a fairly overloaded term. However, it always holds with the same intuition. If we remember box of whatever we have there, if we fold it down, it will just remove it from the box. It's just like map, but it will drop down a level.

01:07 We did the same, where we have a right and a left. We have two handlers here, the error case and success case, but it still removes it from the type. Now what about lists, though? We have numerous values. We have a collection of things. We need to remove it, but we want to just take one thing out, as such, with the fold. We want to be able to summarize the list, as it were.

01:26 Here, with the fold, it is the same intuition, we are just relying on the monoid to be inside the collection so that we can extract one value, in this same sum six. Whenever you see a fold, think removal from a type, be it a collection which relies on a monoid or just a single value in a type. -->

Take this for example:
```js
const res = List.of(Sum(1), Sum(1), Sum(1)).fold(Sum.empty())
res.x === 3 // true
```

This will run the `Sum()` over everything. Neat.

Take a look at the rest of the code for more examples.
