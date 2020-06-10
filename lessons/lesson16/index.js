console.clear()

const fold = box => box.fold(i => i)

const Box = x => ({
  ap: b2 => b2.map(x),
  map: f => Box(f(x)),
  chain: f => f(x),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

// httpGet('/user')
//   .chain(user => httpGet(`/comments/${user.id}`)
//     // chain inside to access both user and comments in the closure
//     .chain(comments => updateDom(user, comments))
//   )

// uwrapping Box,
// i.e. takes Box(x) and returns x
const join = m => m.chain(x => x)

const m = Box(Box(Box(3)))

console.log('1 Box(), 1 join():', join(Box(3)))
console.log('2 Box(), 1 join():', join(Box(Box(3))).inspect())
console.log('3 Box(), 1 join():', join(Box(Box(Box(3)))).inspect())
console.log('4 Box(), 1 join():', join(Box(Box(Box(Box(3))))).inspect())
console.log('----------------------------------------------------------------')
console.log('1 Box(), 1 join():', join(Box(3)))
console.log('2 Box(), 2 join():', join(join(Box(Box(3)))))
console.log('3 Box(), 3 join():', join(join(join(Box(Box(Box(3)))))))
console.log('4 Box(), 4 join():', join(join(join(join(Box(Box(Box(Box(3)))))))))

// console.log('1:', join(Box(3)))
// console.log('2:', join(Box(Box(3))))
// console.log('3:', join(Box(Box(Box(3)))))
// console.log('4:', join(Box(Box(Box(Box(3))))))


process.exit()

const res1 = join(m.map(join))
const res2 = join(join(m))
console.log('join(Box(Box(Box(3))).map(join)) : ', res1)
console.log('join(join(Box(Box(Box(3))) : ', res2)

const m1 = Box('wonder')
const res21 = join(Box(m1))
const res22 = join(m1.map(Box))
console.log('join(Box(Box(\'wonder\'))) : ', res21)
console.log('join(Box(\'wonder\').map(Box)) : ', res22)
