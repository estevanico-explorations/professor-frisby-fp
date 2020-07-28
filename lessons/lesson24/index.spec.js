import Task from 'data.task'
import chai, { expect } from 'chai'
import { Either, Right, Left, fromNullable, Box, foldBox } from '../common'

chai.should()
const err = e => e
const id = i => i

describe('Lesson 24 - Principled type conversions with Natural Transformations', () => {
  const eitherToTask = e => e.fold(Task.rejected, Task.of)

  describe('eitherToTask()', () => {
    it('Convert an error Either() to a task, get data out', () => {
      const l = eitherToTask(Left('errrr')).fork(err, id)
      expect(l).to.equal('errrr')
    })
    
    it('Convert an Right() to a task, get data out', () => {
      const r = eitherToTask(Right('DATA')).fork(err, id)
      expect(r).to.equal('DATA')
    })
  })

  describe('nt(x).map(f) == nt(x.map(f))', () => {
    describe('boxToEither()', () => {
      it('Works if coded corretly', () => {
        const boxToEither = b => b.fold(Right)
        const res1 = boxToEither(Box(100)).map(x => x * 2)
        const res2 = boxToEither(Box(100).map(x => x * 2))
        
        expect(res1.inspect()).to.equal(res2.inspect())
      })
      
      it('fails the law if boxToEither uses a Left() instead', () => {
        const boxToEither = b => b.fold(Left)
        const res1 = boxToEither(Box(100)).map(x => x * 2)
        const res2 = boxToEither(Box(100).map(x => x * 2))
        
        // Left(100) vs Right(200)
        expect(res1.inspect()).to.not.equal(res2.inspect())
      })
    })
    
    describe('first()', () => {
      it('Works if coded corretly', () => {
        const first = xs => fromNullable(xs[0])
        const res1 = first([1, 2, 3]).map(x => x + 2)
        const res2 = first([1, 2, 3].map(x => x + 2))
        
        expect(res1.inspect()).to.equal(res2.inspect())
      })
    })
  })
})
