// const percentageOfWorld = (population) => {
//     let percentagePopulation = (population / 7900 * 100)

//     return `${percentagePopulation}%`
// }
// let israel = percentageOfWorld(9);
// let us = percentageOfWorld(320);
// let canda = percentageOfWorld(100);
// console.log(israel, canda, us);

function percentageOfWorld(population) {
    let percentagePopulation = (population / 7900 * 100)

    return `${percentagePopulation}%`;
}
let israel = percentageOfWorld(9);
let us = percentageOfWorld(320);
let canda = percentageOfWorld(100);
console.log(israel, canda, us);