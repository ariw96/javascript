(function populationPercentages(india, israel, canda, us) {
    let percentages = []
    let populations = [india, israel, canda, us]
    for (let i = 0; i < populations.length; i += 1) {
        function percentageOfWorld(population) {
            return (populations[i] / 7900 * 100);
        }
        percentages.push(percentageOfWorld())
    }
    console.log(percentages)
})(500, 9, 330, 1000)