// const arr = [1, 7, 3, 0, -5, 7, 3, 9]
// for (let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i])
// }

// (function arrLength(arr) {
//     let length = 0;
//     for (let i = 0; i < arr.length; i += 1) {
//         length += 1
//     }
//     console.log(length)

// })([1, 7, 3, 0, -5, 7, 3, ])
// (function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i += 1) {
//         sum += arr[i]
//     }
//     console.log(sum)

// })([1, 7, 3, 0, -5, 7, ])
(function multiply(arr) {
    let multi = 1;
    for (let i = 0; i < arr.length; i += 1) {
        multi *= arr[i]
    }
    console.log(multi)

})([2, 7, ])