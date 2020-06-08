import chai, { expect } from 'chai'
import Task from 'data.task'
import { List, Map } from 'immutable-ext'
import { Box, foldBox } from '../common'

chai.should()

describe('Lesson 14 - You\'ve been using Functors', () => {
  describe('Functors must obey laws', () => {
    // fx.map(f).map(g) == fx.map(x => g(f(x)))
    describe('The first law is the law of composition', () => {
      it('map will be applied the same', () => {
        const normal = 'squirrels'.substring(5).toUpperCase()

        const res1 = Box('squirrels')
          .map(s => s.substring(5))
          .map(s => s.toUpperCase())

        const res2 = Box('squirrels').map(s => s.substring(5).toUpperCase())

        expect(foldBox(res1)).to.equal(foldBox(res2))
        expect(foldBox(res1)).to.equal(normal)
        expect(foldBox(res2)).to.equal(normal)
      })

      it('map will be applied the same across Functors such as List.of()', () => {
        const res1 = List.of('squirrels')
          .map(s => s.substring(5))
          .map(s => s.toUpperCase())

        const res2 = List.of('squirrels').map(s => s.substring(5).toUpperCase())
        expect(res1.inspect()).to.equal(res2.inspect())
      })

      it('map will be applied the same across Functors such as Task.of()', () => {
        const res1 = Task.of('squirrels')
          .map(s => s.substring(5))
          .map(s => s.toUpperCase())

        const res2 = Task.of('squirrels').map(s => s.substring(5).toUpperCase())
        expect(res1.toString()).to.equal(res2.toString())
      })
    })

    // fx.map(id) == id(fx)
    describe('The second law is the law of identity', () => {
      const id = x => x

      it('map will be applied the same', () => {
        const res1 = Box('crayons').map(id)
        const res2 = id(Box('crayons'))

        expect(foldBox(res1)).to.equal(foldBox(res2))
      })

      it('map will be applied the same across Functors such as List.of()', () => {
        // I'm tired of this, you do it.
      })
      
      it('map will be applied the same across Functors such as Task.of()', () => {
        // I'm tired of this, you do it.
      })
    })
  })
})
