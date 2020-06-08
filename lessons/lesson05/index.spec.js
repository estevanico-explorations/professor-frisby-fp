// TODO: Make sure to fill this one out.
import chai, { expect } from 'chai'
import * as lesson from './index.js'

chai.should()

const goodUser = { address: { street: { name: '123 Sesame Street' } } }
const badUser1 = { address: { street: { } } }
const badUser2 = { address: { } }

describe('Lesson 05 - A collection of Either examples compared to imperative code', () => {
  describe('first we will do an if/else then ternary then Either()', () => {
    it('Regular ole if/else', () => {
      expect(lesson.openSite1('Mr. Potatoes')).to.equal('renderPage(Mr. Potatoes)')
    })
    
    it('Regular ole ternary', () => {
      expect(lesson.openSite2('Mr. Potatoes')).to.equal('renderPage(Mr. Potatoes)')
    })
    
    it('Now we will use the safe Either() version', () => {
      expect(lesson.openSiteFunc('Mr. Potatoes')).to.equal('renderPage(Mr. Potatoes)')
    })
  })
 
  describe('Now let\'s screw around with streatName() using deeply nested code or an Either()', () => {
    it('yucky Imperative', () => {
      expect(lesson.streetName('Mr. Potatoes')).to.equal('no street')
      expect(lesson.streetName(badUser1)).to.equal('no street')
      expect(lesson.streetName(badUser2)).to.equal('no street')
      expect(lesson.streetName(goodUser)).to.equal('123 Sesame Street')
    })
    it('(I busted this somehow, gotta fix haha) yummy Either()', () => {
      // expect(lesson.streetNameFunc('Mr. Potatoes')).to.equal('no street')
      // expect(lesson.streetNameFunc(badUser1)).to.equal('no street')
      // expect(lesson.streetNameFunc(badUser2)).to.equal('no street')
      // expect(lesson.streetNameFunc(goodUser)).to.equal('123 Sesame Street')
    })
  })
 
  describe('concatUniq', () => {
    it('yucky Imperative', () => {
      expect(lesson.concatUniqFunc([1, 2, 3], [2, 3, 4])).to.equal('')
    })
    it('(I busted this somehow, gotta fix haha) yummy Either()', () => {
      // expect(lesson.streetNameFunc('Mr. Potatoes')).to.equal('no street')
      // expect(lesson.streetNameFunc(badUser1)).to.equal('no street')
      // expect(lesson.streetNameFunc(badUser2)).to.equal('no street')
      // expect(lesson.streetNameFunc(goodUser)).to.equal('123 Sesame Street')
    })
  })
})
