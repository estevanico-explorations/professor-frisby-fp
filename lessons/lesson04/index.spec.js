import fs from 'fs'
import chai, { expect } from 'chai'
import * as lesson from './index.js'

const GOOD_PATH = './lessons/lesson04/_data.json'
const BAD_JSON = './lessons/lesson04/_invalid.json'
const BAD_PATH = './foo.json'

chai.should()

describe('Lesson 04 - Use chain for composable error handling with nested Eithers', () => {
  describe('Original state', () => {
    it('has a json file that exists and valid json', () => {
      const port = lesson.getPort_Unsafe(GOOD_PATH)
      expect(port).to.equal(8888)
    })

    it('has a json file that does not exist', () => {
      const port = lesson.getPort_Unsafe(BAD_PATH)
      expect(port).to.equal(3000)
    })

    it('has a json file that exists and bad json', () => {
      const port = lesson.getPort_Unsafe(BAD_JSON)
      expect(port).to.equal(3000)
    })
  })

  describe('Middle state', () => {
    describe('Using the tryCatch() function', () => {
      it('runs w/o using .chain() and get data out using .fold()', () => {
        const port = lesson.tryCatch(() => fs.readFileSync(GOOD_PATH))

        const config = port.fold(null, (e) => e.toString())
        expect(config).to.equal('{"port": 8888}') // Extra newline because of file.
      })

      it('still works with an existing file with good json', () => {
        const port = lesson.getPort_MostlySafe(GOOD_PATH)
        expect(port).to.equal(8888)
      })

      it('returns a default when there is a bad path', () => {
        const port = lesson.getPort_MostlySafe(BAD_PATH)
        expect(port).to.equal(3000)
      })

      it('will throw an exception when the returned JSON is bad', () => {
        const exceptionThrower = () => lesson.getPort_MostlySafe(BAD_JSON)
        expect(exceptionThrower).to.throw('Unexpected token ; in JSON at position 0')
      })

      it('will still work with using map and an intermediary .fold()', () => {
        const foldAfterTryCatch = c => 3000

        // Toggle comments for above and this version to look at errors @ runtime.
        // const foldAfterTryCatch = c => {
        //   console.log(c.message)
        //   return 3000
        // }

        const getPort_Safe = (file) =>
          lesson.tryCatch(() => fs.readFileSync(file))
            .map(c => lesson.tryCatch(() => JSON.parse(c))
              .fold(foldAfterTryCatch, c => c.port)
            )
            .fold(e => 3000, c => c)

        expect(getPort_Safe(GOOD_PATH)).to.equal(8888)
        expect(getPort_Safe(BAD_JSON)).to.equal(3000)
        expect(getPort_Safe(BAD_PATH)).to.equal(3000)
      })
    })
  })

  describe('Final state', () => {
    it('has a json file that exists and valid json', () => {
      const port = lesson.getPort_Safe(GOOD_PATH)
      expect(port).to.equal(8888)
    })

    it('has a json file that does not exist', () => {
      const port = lesson.getPort_Safe(BAD_PATH)
      expect(port).to.equal(3000)
    })

    it('has a json file that exists and bad json', () => {
      const port = lesson.getPort_Safe(BAD_JSON)
      expect(port).to.equal(3000)
    })
  })
})
