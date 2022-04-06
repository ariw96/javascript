(function(arg) {
    let score = arg
    switch (true) {
        case score < 65:
            console.log('F')
            break;
        case score < 70:
            console.log('D')
            break;
        case score < 80:
            console.log('C')
            break;
        case score < 90:
            console.log('B')
            break;

        case score < 101:
            console.log('A')
            break;
        default:
            console.log(score)
    }
})(101)