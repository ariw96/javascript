// The global variable
let s = [2, 2, 3, 2];
let initialValue = 1
Array.prototype.myReduce = function(callback) {

    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }
    return accumulator;


};
const new_s = s.myReduce(function(accumulator, currentValue) {
    accumulator = accumulator + currentValue // my find condition
    return accumulator;
}, initialValue);
console.log(new_s)