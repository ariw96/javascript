(function boom(n) {
    let arr = [];
    for (let i = 1; i < n; i++) {
        if ((i % 7) === 0) {
            arr.push("boom")
        } else { arr.push(i) }
    }


    console.log(arr)
})(100)