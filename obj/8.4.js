const arr = ["Hello", "Good Day", "Your Welcome", "hotdog",
    "hamburgerss"
]
let obj = {};
let newArr = arr.join("").toLocaleLowerCase()
let newObj = {};

for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === ' ') { i++ }
    obj = {
        [newArr[i]]: newArr.split(`${newArr[i]}`).length - 1,
    }
    newObj = {...newObj, ...obj }
}
console.log(newObj)