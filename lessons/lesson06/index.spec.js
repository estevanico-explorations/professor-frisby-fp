import chai, { expect } from 'chai'
import * as lesson from './index.js'

chai.should()

describe('Lesson 06 - Create types with Semigroups', () => {
  describe('Different types of concat/semigroup examples', () => {
    describe('Sum(), All(), First()', () => {
      it('Sum()', () => {
        const { Sum } = lesson
        expect(Sum(1).concat(Sum(2)).x).to.equal(3)
      })
      
      it('All() true', () => {
        const { All } = lesson
        const foo = All(true).concat(All(true)).x
        expect(foo).to.equal(true)
      })
      
      it('All() false', () => {
        const { All } = lesson
        const foo = All(true).concat(All(false)).x
        expect(foo).to.equal(false)
      })
      
      it('First() false', () => {
        const { First } = lesson
        const foo = First('blah').concat(First('ice cream')).x
        expect(foo).to.equal('blah')
      })
    })

    describe('Boolean semigroup', () => {
      it('True().concat(True)', () => {
        const { True } = lesson
        const foo = True.concat(True).x
        expect(foo).to.equal(true)
      })
      
      it('True().concat(False)', () => {
        const { False, True } = lesson
        const foo = True.concat(False).x
        expect(foo).to.equal(false)
      })
      
      it('False().concat(False)', () => {
        const { False } = lesson
        const foo = False.concat(False).x
        expect(foo).to.equal(false)
      })
      it('False().concat(False)', () => {
        const { False, True } = lesson
        const foo = False.concat(True).x
        expect(foo).to.equal(false)
      })
    })
  })
})
