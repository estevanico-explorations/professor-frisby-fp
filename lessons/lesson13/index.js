import Task from 'data.task'
import fs from 'fs'
import path from 'path'

const originalFile = path.join(__dirname, '/config.json')
const newFile = path.join(__dirname, '/config_is_fp.json')

export const app_notfp = () => {
  const originalFile = path.join(__dirname, '/config.json')
  const newFile = path.join(__dirname, '/config_not_fp.json')

  fs.readFile(originalFile, 'utf-8', (err, contents) => {
    if (err) {
      throw err
    }

    const newContents = contents.replace(/8/g, '6')

    fs.writeFile(newFile, newContents, (err, _) => {
      if (err) {
        throw err
      }
      // console.log('success! app_notfp finished with no errors!')
    })
  })
}

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

