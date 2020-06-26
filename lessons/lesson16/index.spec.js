import chai, { expect } from 'chai'
import * as lesson from './index.js'

chai.should()

describe('Lesson 16 - You\'ve been using Monads', () => {
  describe('chain', () => {
    const { chain, Box } = lesson
    it('chain() obeys the law of associativity', () => {
      const m = Box(Box(Box(3)))

      expect(chain(m.map(chain))).to.equal(chain(chain(m)))
    })
  })
})
