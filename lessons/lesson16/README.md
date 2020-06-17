## [You've been using Monads](https://egghead.io/lessons/javascript-you-ve-been-using-monads)

Essentially `.chain()` or `.flatMap` (my preferred name) just "unboxes" a doubly nested functor *of the same time*.


```js
// Box, Either, Task, List
// f.of, chain (flatMap, Bind)

httpGet('/user)
  .map(user =>
    httpGet(`/comments/${user.id}`)) // Task(Task([Comment]))

/**
 * The problem with this is that we'd end up spending a lot of time doing
 * .map over .map and then .fork and .fork and so on and so forth. Too
 * hard to maintain if we did that.
 * 
 * So instead we'd chain to "flatten" the operations and instead of the
 * above we'd end up with something like what is below
 */


httpGet('/user)
  .chain(user =>
    httpGet(`/comments/${user.id}`)) // Task([Comment])
```

-----

## Advanced benefits
This is taken wholesale from "Professor Frisby's Mostly adequate Guide to functional programming" and specifically the chapter "Chapter 9: Monadic Onions" > "My chain hits my chest"

Assuming we have these two functions
```
readFile :: Filename -> Either String (Task Error String)
httpPost :: String -> String -> Task Error JSON
```

Then using Functional Programming Techniques™ you can turn this
```js
//  upload :: String -> (String -> a) -> Void
const upload = (filename, callback) => {
  if (!filename) {
    throw 'You need a filename!'
  } else {
    readFile(filename, (err, contents) => {
      if (err) {
        throw err
      }
      httpPost('/uploads', contents, (err, json) => {
        if (err) {
          throw err
        }
        callback(json)
      })
    })
  }
}
```

Into this
```js
//  upload :: String -> Either String (Task Error JSON)
const upload = compose(map(chain(httpPost('/uploads'))), readFile)
```

My face when I saw that the first time.

![](https://i.imgur.com/ryrJ4cn.gif)

_honestly, i'm still getting my head around it. time to hitup the test files!_
