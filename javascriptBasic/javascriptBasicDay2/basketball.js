let teamsScore = [
    [116, 94, 123],
    [89, 120, 203],
    [97, 134, 105]
]
let johnScores = teamsScore[0]
let mikeScores = teamsScore[1]
let maryScores = teamsScore[2]
let arrSums = []
const sumJ = johnScores.reduce(
    (previousValue, currentValue) => previousValue + currentValue
)
arrSums.push(sumJ)
const sumMike = mikeScores.reduce(
    (previousValue, currentValue) => previousValue + currentValue
)
arrSums.push(sumMike)
const sumMary = maryScores.reduce(
    (previousValue, currentValue) => previousValue + currentValue
)
arrSums.push(sumMary)
console.log(sumJ / johnScores.length);
console.log(sumMike / mikeScores.length);
console.log(sumMary / mikeScores.length);
console.log(arrSums);
console.log(Math.max(...arrSums))
switch (Math.max(...arrSums)) {
    case sumJ:
        console.log('john is the winner')
        break;
    case sumMary:
        console.log('mary is the winner')
        break;
    case sumMike:
        console.log('mike is the winner')
        break;
}