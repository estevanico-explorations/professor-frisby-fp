import fs from 'fs'
import path from 'path'
import chai, { expect } from 'chai'
import * as lesson from './index.js'

chai.should()

const file1 = path.join(__dirname, '/config_not_fp.json')
const file2 = path.join(__dirname, '/config_is_fp.json')

if (fs.existsSync(file1)) fs.unlinkSync(file1)
if (fs.existsSync(file2)) fs.unlinkSync(file2)

describe('Lesson 13 - Use Task for Asynchronous Actions', () => {
  describe('Original functionality', () => {
    it('can write the config_not_fp.json file.', () => {
      lesson.app_notfp()
    })
  })

  describe('New functionality that uses Task()s', () => {
    const { app_isFp } = lesson

    it('can still write the file but only if we fork', () => {
      app_isFp()
      expect(fs.existsSync(file2)).to.equal(false)
    })
    
    it('but once we fork the file exists', () => {
      app_isFp().fork(
        e => `error: ${e}`,
        x => `success: ${x}`
      )

      expect(fs.existsSync(file2)).to.equal(false)
    })
  })
})
