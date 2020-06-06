import chai, { expect } from 'chai'
import * as lesson from './index.js'
import { describe } from 'mocha'

chai.should()

const err = e => e
const identity = i => i

describe('Lesson 03 - Enforce a null check with composable code branching using Either', () => {
  describe('Right() & Left() test', () => {
    const { Right, Left } = lesson

    it('Right() test', () => {
      // Right() is the happy path. If you set up Right() with a value then map over
      // it you'll apply the function proficed as such in the example:
      const rightTest = Right(3).map(x => x + 1)

      expect(rightTest.fold(err, identity)).to.equal(4)
    })

    it('Left() test', () => {
      // Left() doesn't run the function in map. Meaning that if you call fold()
      // on the value you'll just get the result back. For example:
      const leftTest = Left(3).map(x => x + 1)

      expect(leftTest.fold(err, identity)).to.equal(3)
    })

    it('Happy path: multimap to value', () => {
      const resultGood = Right(2).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x)
      expect(resultGood).to.equal(1.5)
    })
    
    it('Unhappy path: multimap to value', () => {
      const resultError = Left(2).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x)
      expect(resultError).to.equal('error')
    })
  })

  describe('fromNullable() returns an Either() (Right/Left)', () => {
    const { fromNullable, findColor } = lesson

    it('test out the regular findColor() function; it returns null or string', () => {
      const a = findColor('123').fold(err, identity)
      const b = findColor('red').fold(err, identity)

      expect(a).to.equal(null)
      expect(b).to.equal('#ff4444')
    })

    describe('Now to handle a null case so we can always return a string value', () => {
      it('If a function returns a Right() then we get the processed value', () => {
        const val = findColor('red')
          .map(c => c.slice(1)) // removes the '#'
          .fold(e => 'no color', o => o.toUpperCase())

        expect(val).to.equal('FF4444')
      })

      it('If a function returns a left() then we get the default error value', () => {
        const val = findColor('123')
          .map(c => c.slice(1)) // removes the '#'
          .fold(e => 'no color', o => o.toUpperCase())

        expect(val).to.equal('no color')
      })
    })
  })
})
