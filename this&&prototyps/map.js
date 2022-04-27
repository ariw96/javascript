Array.prototype.myMap = function(callback) {

    var arr = []; // step 1   

    for (let i = 0; i < this.length; i++) // step 2
    {
        arr.push(callback(this[i])); // step 3
    }

    return arr; // step 4
};