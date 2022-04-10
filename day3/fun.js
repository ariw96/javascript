// let foo = [];

// for (var i = 1; i <= 100; i++) {
//     foo.push(i);
// }
// console.log(foo.fill("same"))
// console.log(Array(100).fill({ name: "same" }))
// console.log([].fill.call({ length: 100 }, 4))

// console.log(Array.from({ length: 100 }, (a, index) => index + 2))
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// }
// console.log(Object.values(object1))
const names = ['Alex', 'Bob', 'Johny', 'Atta'];

// convert array to th object
const obj = Object.assign({}, names);
console.log(obj);
console.log(Array.isArray(names));
let copy = names.valueOf()
console.log(copy, names)