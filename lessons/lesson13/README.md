## [Use Task for Asynchronous Actions](https://egghead.io/lessons/javascript-using-task-for-asynchronous-actions)

### Old and busted

This is fine but wouldn't it be great if this was lazy, composable and atomic? I do. Esp the atomic part.
```js
// Function will take the config.json and converts the 8s to 6s.
// Example file is located in ./lessons/lesson13/config.json
export const app = () => {
  const originalFile = path.join(__dirname, '/config.json')
  const newFile = path.join(__dirname, '/config1.json')

  fs.readFile(originalFile, 'utf-8', (err, contents) => {
    if (err) {
      throw err
    }

    const newContents = contents.replace(/8/g, '6')

    fs.writeFile(newFile, newContents, (err, _) => {
      if (err) {
        throw err
      }
      console.log('success!')
    })
  })
}
// Then run the app to get the new file
app()
```

## The new hotness 
First of all the syntax sugar is chefs-kiss.png.

But more importantly everything in here is lazily applied. Nothing happens until you run `.fork()` at the end there.

```js
export const readFile = (filename, enc) => 
  new Task((rej, res) =>
    fs.readFile(filename, enc, (err, contents) =>
      err ? rej(err): res(contents)))

export const writeFile = (filename, contents) => 
  new Task((rej, res) =>
    fs.writeFile(filename, contents, (err, success) =>
      err ? rej(err) : res(success)))

export const app_isFp = () =>
  readFile(originalFile)
  .map(contents => contents.toString().replace(/8/g, '7'))
  .chain(contents => writeFile(newFile, contents))

app_isFp().fork(
  e => `error: ${e}`,
  x => `success: ${x}`
)
```
