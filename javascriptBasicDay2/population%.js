(function alphabetPosition(text) {
    let str = "+abcdefghijklmnopqrstuvwxyz"
    let arrAbc = str.split("")
    let arrText = text.split("")
        // console.log(arrText)
        // console.log(arrAbc)
    let result = ""
    result = arrText.map(function(charText) {
        const indexChar = arrAbc.reduce(function(accumulator, currentValue) {
            if (accumulator === currentValue) {
                // console.log(charText)
                console.log(arrText.indexOf(charText))
                return arrText.indexOf(charText);
            } else return
        }, charText);
        return result += `${indexChar}`;
    });
    console.log(result)
    return text;
})('The sunset sets at twelve o" clock.')
//   20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11