import chai, { expect } from 'chai'
import * as lesson from './index.js'

chai.should()

const { Sum, All, First } = lesson

describe('Lesson 08 - Ensure failsafe combination using monoids', () => {
  describe('Sum()', () => {
    it('Sum(5) + Sum(5)', () => {
      const sum = Sum.empty().concat(Sum(3)).concat(Sum(5))
      expect(sum.x).to.equal(8)
    })

    it('Sum(0) + Sum(5)', () => {
      const sum = Sum.empty().concat(Sum(0)).concat(Sum(5))
      expect(sum.x).to.equal(5)
    })
    
    it('Sum().concat() is follows the associative property', () => {
      const sum = Sum(0).concat(Sum(4))
      expect(sum.x).to.equal(4)
    })
  })
  
  describe('All()', () => {
    it('All.concat() true -> true => true', () => {
      const all = All.empty().concat(All(true)).concat(All(true))
      expect(all.x).to.equal(true)
    })

    it('All.concat() true -> false => false', () => {
      const all = All.empty().concat(All(false)).concat(All(true))
      expect(all.x).to.equal(false)
    })

    it('All.concat() false -> true => false', () => {
      const all = All.empty().concat(All(false)).concat(All(true))
      expect(all.x).to.equal(false)
    })
    
    it('All.concat() false -> false => false', () => {
      const all = All.empty().concat(All(false)).concat(All(false))
      expect(all.x).to.equal(false)
    })
    
    it('All().concat() is follows the associative property', () => {
      const all = All(true).concat(All(false))
      expect(all.x).to.equal(false)
    })
  })
  
  describe('First() but it cannot work because we cannot define a neutral element', () => {
    it('won\'t work', () => {
    })
  })
})
