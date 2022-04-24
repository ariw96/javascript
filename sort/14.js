let arr = [2, 5, 6, 7]
let average = arr.reduce((accumulator, currentValue) => {
    if (currentValue !== arr[arr.length - 1]) {
        return accumulator + currentValue
    } else {
        return (accumulator + currentValue) / arr.length
    }
})
console.log(average)
let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})
let sumOfEven = arr.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 1) { return accumulator }
    return accumulator + currentValue
}, 0)
console.log(sumOfEven)