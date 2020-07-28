import chai, { expect } from 'chai'
import { List } from 'immutable-ext'

chai.should()

describe('[UNFINISHED] Lesson 20 - List comprehensions with Applicative Functors', () => {
  it('it', () => {
    const merch = () =>
    List.of(x => y => `${x} ${y}`)
    .ap(List(['teeshirt', 'sweater']))
    .ap(List(['S', 'M', 'L']))
    
    const result = merch().toString()
    const expected = 'List [ "teeshirt S", "teeshirt M", "teeshirt L", "sweater S", "sweater M", "sweater L" ]'
    
    expect(result).to.equal(expected)
  })
})
