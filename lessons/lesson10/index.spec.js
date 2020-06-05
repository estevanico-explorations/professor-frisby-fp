import chai, { expect } from 'chai'
import { Map, List } from 'immutable-ext'

import { Sum } from '../common/monoids'

chai.should()

describe('Lesson 10 - Unbox types with foldMap', () => {
  describe('[Sum(n), Sum(n) ...]', () => {
    it('Reduce to Sum() everything', () => {
      const reduce = (acc, x) => acc.concat(x)
      const res = [Sum(1), Sum(1), Sum(1)].reduce(reduce, Sum.empty())
      expect(res.x).to.equal(3)
    })
    
    it('Now fold instead', () => {
      const res = List.of(Sum(1), Sum(1), Sum(1)).fold(Sum.empty())
      expect(res.x).to.equal(3)
    })
  })
  
  describe('Using Map() in conjunction with Sum()', () => {
    it('Object with Sum() values', () => {
      const toMap = {
        andric: Sum(1),
        brian: Sum(1),
        sara: Sum(1),
      }

      const res = Map(toMap).fold(Sum.empty())
      expect(res.x).to.equal(3)
    })
    
    it('Object with primatives values that we convert to Sum', () => {
      const toMap = {
        andric: 1,
        brian: 1,
        sara: 1,
      }

      const res = Map(toMap).map(Sum).fold(Sum.empty())
      expect(res.x).to.equal(3)
    })
  })
})
