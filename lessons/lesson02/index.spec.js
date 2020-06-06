import chai, { expect } from 'chai'
import { moneyToFloat, percentToFloat, applyDiscount } from './index.js'

chai.should()

describe('Lesson 02 - Refactor imperative code to a single composed expression using Box', () => {
  it('moneyToFloat -> Box()', () => {
    expect(moneyToFloat('$100')).to.equal(100)
  })
  
  it('percentToFloat -> Box()', () => {
    expect(percentToFloat('10%')).to.equal(.1)
  })

  it('applyDiscount -> Box()', () => {
    expect(applyDiscount('$5.00', '20%')).to.equal(4)
    expect(applyDiscount('$200', '20%')).to.equal(160)
  })
})
