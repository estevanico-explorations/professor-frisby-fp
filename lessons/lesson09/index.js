/* eslint-disable no-unused-vars */

import { List } from 'immutable-ext'
import * as lesson from '../lesson08'
import { Right, Left } from '../common'

// The max of all numbers.
export const Max = x => ({
  x,
  concat: ({ x: y }) => Max(x > y ? x : y),
  inspect: _ => `Max(${x})`
})

// Multiply together.
export const Product = x => ({
  x,
  concat: ({ x: y }) => Product(x * y),
  inspect: _ => `Product(${x})`
})

// Take anything (first thing) that has a value.
export const Any = x => ({
  x,
  concat: ({ x: y }) => Any(x || y),
  inspect: _ => `Any(${x})`
})

// Take anything (first thing) that has a value.
export const Min = x => ({
  x,
  concat: ({ x: y }) => Min(x < y ? x : y),
  inspect: _ => `Min(${x})`
})

// Wrap Either into First
export const First = either => ({
  fold: f => f(either),
  concat: o => either.isLeft ? o : First(either),
  inspect: _ => `First(${either.inspect()})`
})

// All the empty methods together so that they are easier to see.
Max.empty = _ => Max(-Infinity)
Any.empty = _ => Any(false)
Min.empty = _ => Any(Infinity)
Product.empty = _ => Product(1)
First.empty = _ => First(Left())

export const find = (xs, f) => List(xs).foldMap(
  x => First(f(x) ? Right(x) : Left()),
  First.empty()
).fold(x => x)
