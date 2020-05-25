<p align="center">
  <img src="https://raw.githubusercontent.com/mrpotatoes/professor-frisby-fp/master/assets/fp-professor-frisby.jpg" />
</p>

# professor-frisby-fp
Code from "Professor Frisby Introduces Composable Functional JavaScript"

Playlist is located here: https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript

I think Prof Frisby explains it best when people ask why use these weird words:

> "Now, why is it called the semigroup? Why isn't it just called a concatible or something?
> That is a good question. The idea is semigroups come from abstract algebra and so we are encoding this in our code so we can keep the name the same and understand the laws and properties that come with this mathematical structure rather than just making something up on our own.
> - Professor Frisby (from the transcript)

## About
This is supplimental to the [egghead.io](https://egghead.io/) course. Each lesson directory has a readme with my own thoughts to each lesson. Student's notes if you will. It's in a `README.md` so you'll see it as soon as you click into each lesson. The code itself is run as a series of tests though `package.json`. Run the code to see each iteration.

This is **_NOT_** a replacement for watching the videos and doing it yourself. This **_IS_** supplimental and a way for you to screw around with code so you don't have to write it yourself.

## My other FP Projects
I'm always trying to get better at Functional Programming and I want to go through this course to learn more about it as I'm trying to strengthen my foundation. I am also, very slowly, putting together a guide to functional programming with it's own code as well. You can find that here: 

* [Documentation](https://mrpotatoes.github.io/functional-programming-in-js-reference)
* [Repo](https://github.com/mrpotatoes/functional-programming-in-js-reference)

_*NOTE*_: This repo will be merged into the other repo at some point after I finish this full playlist AND after i've finished the entirety of my "`Algebras (3/47 complete)`" section in my wiki/guide.

## Commands
| Command | Does? | Lesson | 
|:------|:------------|:---|
| `test` | Runs all the tests | `n/a` |
| `test:watch` | Run all the tests and watch them | `n/a` |
| `test:01` | `--watch` lesson 01 tests | [Create linear data flow with container style types (Box)](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson01) | 
| `test:02` | `--watch` lesson 02 tests | [Refactor imperative code to a single composed expression using Box](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson02) |
| `test:03` | `--watch` lesson 03 tests | [Enforce a null check with composable code branching using Either](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson03) |
| `test:04` | `--watch` lesson 04 tests | [Use chain for composable error handling with nested Eithers](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson04) |
| `test:05` | `--watch` lesson 05 tests | [A collection of Either examples compared to imperative code](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson05) |
| `test:06` | `--watch` lesson 06 tests | [Create types with Semigroups](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson06) |
| `test:07` | `--watch` lesson 07 tests | [Semigroup examples](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson07) |
| `test:08` | `--watch` lesson 08 tests | [Ensure failsafe combination using monoids](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson08) |
| `test:09` | `--watch` lesson 09 tests | [A curated collection of Monoids and their uses](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson09) | 
| `test:10` | `--watch` lesson 10 tests | [Unbox types with foldMap](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson10) | 
| `test:11` | `--watch` lesson 11 tests | [Delay Evaluation with LazyBox](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson11) | 
| `test:12` | `--watch` lesson 12 tests | [Capture Side Effects in a Task](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson12) | 
| `test:13` | `--watch` lesson 13 tests | [Use Task for Asynchronous Actions](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson13) | 
| `test:14` | `--watch` lesson 14 tests | [You've been using Functors](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson14) | 
| `test:15` | `--watch` lesson 15 tests | [Lift into a Pointed Functor with of](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson15) | 
| `test:16` | `--watch` lesson 16 tests | [You've been using Monads](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson16) | 
| `test:17` | `--watch` lesson 17 tests | [Build curried functions](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson17) | 
| `test:18` | `--watch` lesson 18 tests | [Applicative Functors for multiple arguments](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson18) | 
| `test:19` | `--watch` lesson 19 tests | [Apply multiple functors as arguments to a function (Applicatives)](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson19) | 
| `test:20` | `--watch` lesson 20 tests | [List comprehensions with Applicative Functors](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson20) | 
| `test:21` | `--watch` lesson 21 tests | [Write applicatives for concurrent actions](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson21) | 
| `test:22` | `--watch` lesson 22 tests | [Leapfrogging types with Traversable](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson22) | 
| `test:23` | `--watch` lesson 23 tests | [Maintaining structure whilst asyncing](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson23) | 
| `test:24` | `--watch` lesson 24 tests | [Principled type conversions with Natural Transformations](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson24) | 
| `test:25` | `--watch` lesson 25 tests | [Apply Natural Transformations in everyday work](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson25) | 
| `test:26` | `--watch` lesson 26 tests | [Isomorphisms and round trip data transformations](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson26) | 
| `test:27` | `--watch` lesson 27 tests | [Build a data flow for a real world app](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson27) | 
| `test:28` | `--watch` lesson 28 tests | [Retrieve and use data from an api with pure functional constructs](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson28) | 
| `test:29` | `--watch` lesson 29 tests | [Find the intersection of sets with Semigroups](https://github.com/mrpotatoes/professor-frisby-fp/tree/master/lessons/lesson29) | 
