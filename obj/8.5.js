const obj = {
    country: "mind",
    capital: 'ari',
    language: '2010',
    population: '20',
};

function swap(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[obj[key]] = key;
    }
    return newObj;
}
console.log(swap(obj))