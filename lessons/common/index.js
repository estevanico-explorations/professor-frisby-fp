/* eslint-disable no-unused-vars */

/**
 * This file exists so that I'm not repeating everything within every exercise.
 */

/**
 * 
 * @param {*} x 
 */
export const Box = x => ({
  // b2 must be a boxed function Box(f)
  ap: b2 => b2.map(x),

  // f must be from any type a to any type b
  map: f => Box(f(x)),

  // f must be from any type a into the boxed type Box(a)
  chain: f => f(x),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

/**
 * 
 * @param {*} x 
 */
export const Right = x => ({
  ap: b2 => b2.map(x),

  // Right applies f to x
  map: f => Right(f(x)),

  // applies the function on the right and returns raw value
  fold: (f, g) => g(x),

  concat: o => o.fold(
    e => Left(e),
    r => Right(x.concat(r))
  ),

  // custom getter function -- called by console.log
  inspect: () => `Right(${x})`
})

/**
 * 
 * @param {*} x 
 */
export const Left = x => ({
  isLeft: true,
  ap: b2 => b2.map(x),

  // Left ignores f, simply passes x itself
  map: f => Left(x),

  // applies the function on the left and returns raw value
  fold: (f, g) => f(x),

  concat: o => o.fold(
    _ => Left(x),
    o => Left(x)
  ),

  // custom getter function -- called by console.log
  inspect: () => `Left(${x})`
})


/**
 * Safe 'null' value using Eithers
 * 
 * ensure null will always go Left
 * @param {*} x 
 */
export const fromNullable = x => x != null ? Right(x) : Left(null)

export const Either = x => null == x ? Left(x) : Right(x)

export const foldBox = box => box.fold(i => i)
