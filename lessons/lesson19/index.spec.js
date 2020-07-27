import chai, { expect } from 'chai'
import { Either } from '../common'

chai.should()

const liftA2 = (f, fx, fy) => fx.map(f).ap(fy)

// Misc functions to run the test.
const getScreenSize = screen => head => foot => screen - (head.height + foot.height)
const $ = selector => Either({ selector, height: 10 })
const id = i => i
const err = () => 'err'

describe('Lesson 19 - Apply multiple functors as arguments to a function (Applicatives)', () => {
  describe('Either()', () => {
    it('Subtracting the screen size twice works as expected', () => {
      // Partially apply to 800 and wrap into Either,
      // now apply one-by-one to the wrapped objects via 'ap'
      const res = Either(getScreenSize(800))
        .ap($('header'))
        .ap($('footer'))

      expect(res.fold(err, id)).to.equal(780)
    })
    
    it('As expected a null passed to Either() will error out per the Left\'s paradigm', () => {      
      // now pass null
      const $$ = () => Either(null)
      
      const res = Either(getScreenSize(800))
        .ap($$('header'))
        .ap($$('footer'))
      
      expect(res.fold(err, id)).to.equal('err')
    })
  })
  
  describe('liftA2()', () => {
    it('it', () => {
      const res = liftA2(getScreenSize(800), $('header'), $('footer'))
      expect(res.fold(err, id)).to.equal(780)
    })

    it('As expected a null passed to Either() will error out per the Left\'s paradigm', () => {
      // now pass null
      const $$ = () => Either(null)
      const res = liftA2(getScreenSize(null), $$('header'), $$('footer'))
      expect(res.fold(err, id)).to.equal('err')
    })
  })
})
