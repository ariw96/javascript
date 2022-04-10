(function counryToLive(language, isIsland, population, country) {
    let result;
    if (language === "english" && !isIsland && population < 50) {
        result = `You 
    should live in ${country}`

    } else {

        result = `${country} does not meet 
        your criteria`
    }
    console.log(result)
})('english', false, 69, "israel")