const arr = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];
let obj = {};
let i = 0
while (i < arr.length) {
    let j = 0
    while (j < arr[i].length) {
        obj = {
            nighbour: arr[i][j],
        }
        console.log(obj)
        j++;
    }
    i++;
}