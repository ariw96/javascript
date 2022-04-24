const arr = [1, 2, 3, 4];


const sum = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
)

console.log(sum / arr.length);