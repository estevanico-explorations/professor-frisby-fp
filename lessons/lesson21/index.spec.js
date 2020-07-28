import Task from 'data.task'
import chai, { expect } from 'chai'
import * as lesson from './index.js'

chai.should()

const { Db, reportHeader } = lesson

describe('Lesson 21 - Write applicatives for concurrent actions', () => {
  describe('asdasd', () => {
  describe('Concurrent async tasks firing off and applicatives applied to each functor when they are resolved', () => {
      const id = i => {
        expect(i).to.equal('Report: Project 20 compared to Project 8')
      }

      // curried Task to be applied twice
      Task.of(p1 => p2 => reportHeader(p1, p2))
        .ap(Db.find(20))
        .ap(Db.find(8))
        .fork(console.error, id)
    })
  })
})
