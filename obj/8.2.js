const myCountry = {
    country: "mind",
    capital: 'ari',
    language: '2010',
    population: '2010',
    neighbours: [],
    describe: function() {
        return ` Finland has 6 million people, their mother tongue is Finnish, they 
have 3 neighbouring countries and a capital called Helsinki`;
    },
    checkIsland: function(a) {
        return a.length === 0 ? true : false;
    },


};

console.log(myCountry.checkIsland(myCountry.neighbours))
console.log(myCountry.describe())