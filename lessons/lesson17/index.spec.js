import chai, { expect } from 'chai'
import * as lesson from './index.js'

chai.should()

describe('Lesson 17 - Build curried functions', () => {
  describe('modulo', () => {
    const modulo = dvr => dvd => dvd % dvr

    it('odd works', () => {
      const isOdd = modulo(2)
      expect(isOdd(1)).to.equal(1)
      expect(isOdd(3)).to.equal(1)
      expect(isOdd(55)).to.equal(1)
    })
    
    it('even works', () => {
      const isEven = modulo(2)
      expect(isEven(2)).to.equal(0)
      expect(isEven(4)).to.equal(0)
      expect(isEven(120)).to.equal(0)
    })
  })
  
  describe('getAllOdds', () => {
    it('gets only odd numbers from array', () => {
      const filter = pred => xs => xs.filter(pred)
      const modulo = dvr => dvd => dvd % dvr
      const isOdd = modulo(2)
      const getAllOdds = filter(isOdd)

      expect(getAllOdds([1, 2, 3, 4, 5])).to.deep.equal([1, 3, 5])
    })
  })
  
  describe('censor()', () => {
    it('uses regex to replace words', () => {
      const replace = regex => replace => str => str.replace(regex, replace)
      const censor = replace(/[aieou]/ig)('*')

      expect(censor('hello world')).to.equal('h*ll* w*rld')
    })
  })
  
  describe('censorAll()', () => {
    it('uses regex to replace words', () => {
      const map = f => xs => xs.map(f)
      const replace = regex => replace => str => str.replace(regex, replace)
      const censor = replace(/[aieou]/ig)('*')
      const censorAll = map(censor)
      const words = ['hello', 'world']
      const expected = ['h*ll*', 'w*rld']

      expect(censorAll(words)).to.deep.equal(expected)
    })
  })
})
