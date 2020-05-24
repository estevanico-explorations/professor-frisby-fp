/* eslint-disable */
import fs from 'fs'
import daggy from 'daggy'
import chai, { expect } from 'chai'
import * as lesson from './index.js'

const goodPath = './lessons/lesson04/_data.json'
const badJSON = './lessons/lesson04/_invalid.json'
const badPath = './foo.json'

chai.should()

describe('Lesson 4', () => {
  describe('Original state', () => {
    it('has a json file that exists and valid json', () => {
      const port = lesson.getPort_Unsafe(goodPath)
      expect(port).to.equal(8888)
    })

    it('has a json file that does not exist', () => {
      const port = lesson.getPort_Unsafe(badPath)
      expect(port).to.equal(3000)
    })

    it('has a json file that exists and bad json', () => {
      const port = lesson.getPort_Unsafe(badJSON)
      expect(port).to.equal(3000)
    })
  })

  describe('Middle state', () => {
    describe('Using the tryCatch() function', () => {
      it('runs w/o using .chain() and get data out using .fold()', () => {
        const port = lesson.tryCatch(() => fs.readFileSync(goodPath))

        const config = port.fold(null, (e) => e.toString())
        expect(config).to.equal('{"port": 8888}') // Extra newline because of file.
      })

      it('still works with an existing file with good json', () => {
        const port = lesson.getPort_MostlySafe(goodPath)
        expect(port).to.equal(8888)
      })

      it('returns a default when there is a bad path', () => {
        const port = lesson.getPort_MostlySafe(badPath)
        expect(port).to.equal(3000)
      })

      it('will throw an exception when the returned JSON is bad', () => {
        const exceptionThrower = () => lesson.getPort_MostlySafe(badJSON)
        expect(exceptionThrower).to.throw('Unexpected token ; in JSON at position 0')
      })      
    })
  })

  describe('Final state', () => {
    it('has a json file that exists and valid json', () => {
      const port = lesson.getPort_Safe(goodPath)
      expect(port).to.equal(8888)
    })

    it('has a json file that does not exist', () => {
      const port = lesson.getPort_Safe(badPath)
      expect(port).to.equal(3000)
    })

    it('has a json file that exists and bad json', () => {
      const port = lesson.getPort_Safe(badJSON)
      expect(port).to.equal(3000)
    })
  })
})