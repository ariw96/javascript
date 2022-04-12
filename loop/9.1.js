const arr = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];
let obj = {};
for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
        obj = {
            nighbour: arr[i][j],
        }
        console.log(obj)
    }
}