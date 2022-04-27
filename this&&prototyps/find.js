// The global variable
let s = [23, 65, 98, 5];

Array.prototype.myFind = function(callback) {
    // Only change code below this line
    let result = undefined;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result = this[i];
            return result;
        }

    }
    // Only change code above this line

};


const new_s = s.myFind(function(item) {
    if (item === 98) { // my find condition
        return true;
    }
});
console.log(new_s)