(function(n) {
    let str = ""
    let newStr = "";
    for (let i = 0; i < n; i++) {
        str += '#'
        newStr = str
        for (let j = n - 1 - i; j > 0; j--) {
            newStr += "e"
        }
        console.log(newStr)
    }
})(9)