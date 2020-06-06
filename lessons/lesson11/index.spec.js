import chai, { expect } from 'chai'
import * as lesson from './index.js'

chai.should()

describe('Lesson 11 - Delay Evaluation with LazyBox', () => {
  describe('Original state', () => {
    it('it', () => {
      console.log('A:', lesson.a)
      console.log('B:', lesson.b)
    })
  })

  describe('Middle state', () => {
    describe('another thing', () => {
      it('it', () => {
      })
    })
  })

  describe('Final state', () => {
    it('it', () => {
    })
  })
})
