import chai, { expect } from 'chai'
import { nextCharForNumberString } from './index.js'

chai.should()

describe('Lesson 01 - Create linear data flow with container style types (Box)', () => {
  it('Testing the use of Box()', () => {
    expect(nextCharForNumberString('   64  ')).to.equal('a')
  })
})
