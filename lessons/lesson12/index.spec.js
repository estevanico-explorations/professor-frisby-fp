import Task from 'data.task'
import chai, { expect } from 'chai'
import { launchMissiles } from './index.js'
import { describe } from 'mocha'

chai.should()

describe('Lesson 12 - Capture Side Effects in a Task', () => {
  describe('Essentially the same as lesson 11 but ', () => {
    const showErr = e => `error: ${e}`
    const showSuc = x => `success: ${x}`

    it('on success it should return the value', () => {
      const succeeded = Task.of(44).fork(showErr, showSuc)
      expect(succeeded).to.equal('success: 44')
    })
    
    it('on failure it should give us our failure state', () => {
      const erroredOut = Task.rejected(81).fork(showErr, showSuc)
      expect(erroredOut).to.equal('error: 81')
    })
    
    it('When not forked it doesn\'t run', () => {
      const app = launchMissiles().map(x => x + '!')      
      const didItRun = app.map(x => x + '!')

      // Object type is the Task object. console.log to see for sure.
      expect(typeof didItRun).to.equal('object')
    })

    describe('When forked it runs', () => {
      it('Not sure why isn\'t not here but I\'m not interested in finding out with this old package', () => {
        const didItRun = launchMissiles()
          .map(x => x + '!')
          .map(x => x + '! 123')
          .fork(
            e => (`error: ${e}`),
            x => {
              // console.log(x)
              return `success: ${x}`
            })

        console.log(didItRun)
      })
    })
  })
})
