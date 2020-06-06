import chai, { expect } from 'chai'
import * as lesson from './index.js'
import { foldBox } from '../common'

chai.should()

describe('Lesson 11 - Delay Evaluation with LazyBox', () => {
  const { Box, LazyBox } = lesson
  describe('using regular ole\' Box()', () => {    
    it('notice how it outputs to the console even if I do not run fold()', () => {
      const box = Box('THIS IS SOME TEXT')
        .map(s => {
          console.log('aaaaaaaa', s)
          return s
        })

      expect(box.inspect()).to.equal('Box(THIS IS SOME TEXT)')
    })
    
    it('And of course it\'ll still output to the console even if I run fold()...', () => {
      const box = Box('THIS IS SOME TEXT')
        .map(s => {
          console.log('aaaaaaaa', s)
          return s
        })

      expect(foldBox(box)).to.equal('THIS IS SOME TEXT')
    })
  })
  
  describe('Now using LazyBox()', () => {
    it('The console.log does not run even if I build the LazyBox()', () => {
      const lazy = LazyBox(() => 'this is some text')
      .map(s => {
        console.log('aaaaaaaa', s)
        return s
      })
      
      expect(lazy.inspect()).to.equal('LazyBox(() => f(g()))')
    })
    
    it('And of course it\'ll still output to the console even if I run fold()...', () => {
      const lazy = LazyBox(() => 'this is some text')
      .map(s => {
        console.log('aaaaaaaa', s)
        return s
      })
      
      expect(foldBox(lazy)).to.equal('this is some text')
    })
  })
})
