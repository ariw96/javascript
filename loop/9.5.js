// function isStr(str, func) {
//     if (typeof str === "string") {
//         func(str)
//     } else { console.log(false) }

// }

// function callback2(a) {
//     console.log(a)
//     console.log(a)
//     console.log(a)
// }

// function callback(string) {
//     console.log(string)
// }
// isStr('j', callback2);

function firstWordUp(str, func) {
    str = str.split(" ")
    str[0] = str[0].toUpperCase()
    console.log(str[0])
    newStr = str.join(" ")
    callback(newStr)


}


function callback(str) {
    console.log(str.replace(/ /ig, '-'))
}
// firstWordUp('jhhh hfre ytr', callback);
function myCallback(str, func) {
    func(str, func)
}
myCallback("good morning test", firstWordUp)