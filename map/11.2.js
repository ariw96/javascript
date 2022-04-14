let arr = [1, 3, 4, 5, 6, 7, 5, ];
// let arrStr = ["anjgygyjb", 'arydyrb', 'ajyvhjvjb']
let str = "acvsjsuwywywywywywywyeudhfjkco"



const doubleValues = (arr) => {
    return arr.map((element) => { return element * 2 })

}
const double = () => {
    return doubleValues(arr)
}
const onlyEven = (arr) => {
    return arr.filter((element) => { return element % 2 === 1 })

}

const showFirstAndLast = (arrStr) => {
    return arrStr.map((element) => {
        return element.charAt(0) + element.slice(-1)
    })
}

let arrStr = str.split('')
console.log(arrStr)