console.clear()

const path = require('path')
const fs = require('fs')
const Task = require('data.task')
const futurize = require('futurize').futurize(Task)
const { List } = require('immutable-ext')


const readFile = futurize(fs.readFile)
const files = List([
  path.join(__dirname, 'index.js'),
  path.join(__dirname, 'README.md')
])

const log = (list) => {
  console.log(list.toString())
}

files.traverse(Task.of, fn => readFile(fn, 'utf-8'))
  .fork(console.log, log)


// // readFilePromise :: String -> String -> Promise Error Buffer
// const readFilePromise = (fileName, encoding = 'utf-8') =>
//   runNode(fs.readFile, fileName, { encoding })

// // wrap into List that provides 'traverse'
// const files = List(['file1.txt', 'file2.txt'])

// /*
//   'files' is List of files 'List(a)'
//   'map' preserves the List wrapper, so we can get 'List(Promise(a))'
//   'traverse' applies the function (a -> f b) to each List entry,
//     then lifts the List to Promise of Lists via CreedPromise's 'ap' operator
//     running Promises in parallel!
// */

// files
//   .traverse(
//     // type hint, applicative functor
//     // needed in case of failure or never running the function
//     CreedPromise.of,

//     // traversing function a -> f b
//     file => readFilePromise(file)
//   )
//   .then(console.log, console.error)
