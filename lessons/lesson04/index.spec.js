/* eslint-disable */
import fs from 'fs'
import daggy from 'daggy'
import chai, { expect } from 'chai'
import * as lesson from './index.js'

const goodPath = './lessons/lesson04/data.json'
const badPath = './foo.json'

chai.should()

describe('Lesson 4', () => {
  describe('getPort()', () => {
    it('happy path', () => {
      const getPort = () => lesson.tryCatch(() => 
        fs.readFileSync(goodPath))
          .chain(c => lesson.tryCatch(() => JSON.parse(c)))
          .fold(e => 3000, c => c.port)

      expect(getPort()).to.equal(8888)
    })

    it('sad path', () => {
      const getPort = () => lesson.tryCatch(() => fs.readFileSync(badPath))
        .chain(c => lesson.tryCatch(() => JSON.parse(c)))
        .fold(e => 3000, c => c.port)

        expect(getPort()).to.equal(3000)
    })
  })
})