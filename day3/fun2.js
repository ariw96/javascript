// console.log(Array(100).fill({ name: "same" }))
console.log([].fill.call({ length: 100 }, 4))