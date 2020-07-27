import chai, { expect } from 'chai'
import * as lesson from './index.js'

import { Box, foldBox } from '../common'

chai.should()

describe('Lesson 18 - Applicative Functors for multiple arguments', () => {
  describe('Learning the reason for applicatives', () => {
    it('.map() plus it\'s inverse is the same', () => {
      const b1 = Box(2).map(x => x + 1)
      const b2 = Box(x => x + 1).ap(Box(2))

      expect(foldBox(b1)).to.equal(foldBox(b2))
    })
    
    it('still works with multiple params', () => {
      const add2 = x => y => x + y
      const b1 = Box(add2)
        .ap(Box(1))
        .ap(Box(2))

      expect(foldBox(b1)).to.equal(3)
    })
  })

  describe('Applicative function laws', () => {
    describe('F(x).map(f) == F(f).ap(F(x))', () => {
      it('1 param + functor', () => {
        const add = x => x + 1
        const leftSide = foldBox(Box(1).map(add))
        const rightSide = foldBox(Box(add).ap(Box(1)))

        expect(leftSide).to.equal(rightSide)
      })
    })
  })
})
