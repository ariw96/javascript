function greaterThan10(arg1) {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arg1 > 10) {
                resolve("greater than 10")
            } else {
                reject("less than 10")
            }
        }, 2000);
    });
    return myPromise
}
console.log(greaterThan10(10)
    .then((value) => console.log(value))
    .catch((err) => console.log(err)))