// Semigroups
// type with a concat method

// 'a' is the semi-group because it has a concat method
// const res = 'a'.concat('b')
namespace lesson6 {
let res = [1,2].concat([3,4]).concat([5,6])

//associativity
res = [1,2].concat([3,4].concat([5,6]))

console.log(res)
}

// task: make a Sum semi-group
// remember semi-groups are types with a concat method


// task: make a bool semi-group
