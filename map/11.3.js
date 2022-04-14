const data = [{
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];


function namesOfData(data) {
    let arrNames = []
    data.forEach(element => {
        arrNames.push(element.name)

    });
    return arrNames
}

function bornBefore1990(data) {
    let arrBefore = []
    data.forEach(element => {
        if (element.birthday.slice(-2) < "90") {

            arrBefore.push(element)
        }

    });
    return arrBefore
}

function allFoods(data) {
    let objFoods = {}
    let arrFoods = []
    data.forEach(element => {
        arrFoods.push(...element.favoriteFoods.meats)
        arrFoods.push(...element.favoriteFoods.fish)
    });
    arrFoods.forEach(element => {
        objFoods[element] ? objFoods[element] += 1 : objFoods[element] = 1;
    });
    return objFoods
}
console.log(allFoods(data))