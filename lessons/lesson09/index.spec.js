import { List } from 'immutable-ext'
import chai, { expect } from 'chai'
import * as lesson from './index.js'
import * as lesson08 from '../lesson08'
import { fromNullable, Right } from '../common'

chai.should()

describe('Lesson 09 - A curated collection of Monoids and their uses', () => {
  describe('Max()', () => {
    const { Max } = lesson
    it('Max(): 4 or 5', () => {
      const max = Max(4).concat(Max(5))
      expect(max.x).to.equal(5)
    })
    
    it('Max(): 4, 5 or 7', () => {
      const max = Max(4).concat(Max(5)).concat(Max(7))
      expect(max.x).to.equal(7)
    })
    
    it('Max(): empty, 4, 5 or 7', () => {
      const max = Max.empty().concat(Max(4)).concat(Max(5)).concat(Max(7))
      expect(max.x).to.equal(7)
    })
  })

  describe('Product()', () => {
    const { Product } = lesson
    it('Product(): 1, 2', () => {
      const prod = Product(1).concat(Product(2))
      expect(prod.x).to.equal(2)
    })
    
    it('Product(): 1, 0', () => {
      const prod = Product(1).concat(Product(0))
      expect(prod.x).to.equal(0)
    })
    
    it('Product(): 3, 5', () => {
      const prod = Product(3).concat(Product(5))
      expect(prod.x).to.equal(15)
    })
    
    it('Product(): empty, 3, 5', () => {
      const prod = Product.empty().concat(Product(3)).concat(Product(5))
      expect(prod.x).to.equal(15)
    })
  })

  describe('Any() (would be more powerful in JS if we could override the || for objects and classes)', () => {
    const { Any } = lesson
    it('Any(): 1, 2 or true, false or "" or {}', () => {
      const monoid1 = Any(1).concat(Any(2))
      const monoid2 = Any(true).concat(Any(false))
      const monoid3 = Any('').concat(Any('something'))

      expect(monoid1.x).to.equal(1)
      expect(monoid2.x).to.equal(true)
      expect(monoid3.x).to.equal('something')
    })
    
    it('Any(): 1, 0', () => {
      const monoid = Any(0).concat(Any(1))
      expect(monoid.x).to.equal(1)
    })
    
    it('Any(): 0, 0, 3, 5', () => {
      const monoid = Any(0).concat(Any(0)).concat(Any(3)).concat(Any(5))
      expect(monoid.x).to.equal(3)
    })
    
    it('Any(): empty, 0, 0, 3, 5', () => {
      const monoid = Any.empty().concat(Any(0)).concat(Any(0)).concat(Any(3)).concat(Any(5))
      expect(monoid.x).to.equal(3)
    })
  })
  
  describe('Min()', () => {
    const { Min } = lesson
    it('Min(): 1, 2 or true, false or "" or {}', () => {
      const monoid1 = Min(1).concat(Min(2))
      const monoid2 = Min(true).concat(Min(false))
      const monoid3 = Min('').concat(Min('something'))

      expect(monoid1.x).to.equal(1)
      expect(monoid2.x).to.equal(false)
      expect(monoid3.x).to.equal('')
    })

    it('Min(): 1, 0', () => {
      const monoid = Min(0).concat(Min(1))
      expect(monoid.x).to.equal(0)
    })

    it('Min(): 10, 0, 3, 5', () => {
      const monoid = Min(10).concat(Min(0)).concat(Min(3)).concat(Min(5))
      expect(monoid.x).to.equal(0)
    })

    it('Min(): empty, 0, 0, 3, 5 (it\'s Infinity)', () => {
      const monoid = Min.empty().concat(Min(0)).concat(Min(0)).concat(Min(3)).concat(Min(5))
      expect(monoid.x).to.equal(Infinity)
    })
  })
  
  describe('Right() + Left()', () => {
    const { Sum } = lesson08 
    // const { Right } = lesson
    
    it('Safe sum a bunch of numbers in a series of objects', () => {
      const stats = List.of(
        { page: 'Home', views: 40 },
        { page: 'About', views: 10 },
        { page: 'Blog', views: 4 }
      )

      const safeAdd = stats.foldMap(
        x => fromNullable(x.views).map(Sum),
        Right(Sum(0))
      )

      const deets = safeAdd.fold(null, f => f)

      expect(deets.x).to.equal(54)
    })
  })

  describe('First()', () => {
    const { First } = lesson

    it('Safe sum a bunch of numbers in a series of objects', () => {
      expect(First(Right(55)).inspect()).to.equal('First(Right(55))')
      expect(First(Right(111)).concat(First(Right(55))).inspect()).to.equal('First(Right(111))')

      expect(First.empty().concat(First(Right(55))).inspect()).to.equal('First(Right(55))')
    })

    describe('First() + find()', () => {
      const { find } = lesson

      it('find() first number bigger than 4', () => {
        const biggerThan4 = find([3, 4, 5, 6, 7], x => x > 4).fold(null, x => x)

        expect(biggerThan4).to.equal(5)
      })
    })
  })
})
