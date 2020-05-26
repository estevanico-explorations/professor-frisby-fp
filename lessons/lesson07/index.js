// Expanding on Lesson 06
import { Map } from 'immutable-ext'
import { First, All, Sum } from '../lesson06'

export const acct1 = Map({
  name: First('Nico'),
  isPaid: All(true),
  points: Sum(10),
  friends: ['Franklin']
})

export const acct2 = Map({
  name: First('Nico'),
  isPaid:All(false),
  points: Sum(2),
  friends: ['Gatsby']
})

export const rest = acct1.concat(acct2)

