import chai, { expect } from 'chai'
import * as lesson from './index.js'

chai.should()

describe('Lesson 07 - Semigroup examples', () => {
  describe('bar', () => {
    it('baz', () => {
      const contated = lesson.rest.toJS()
      
      expect(contated.name.x).to.equal('Nico')
      expect(contated.isPaid.x).to.equal(false)
      expect(contated.points.x).to.equal(12)
      
      // This is the only one whose API doesn't use x because
      // it's a plain array.
      expect(contated.friends).to.deep.equal(['Franklin', 'Gatsby'])
    })
  })
})
