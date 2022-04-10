(function(language) {
    let place;
    switch (language) {
        case "mandarin":
            place = 'MOST number of native speakers!';
            break;
        case "spanish":
            place = '2nd place in number of native speakers';
            break;
        case "english":
            place = '3rd place';
            break;
        case "hindi":
            place = 'Number 4';
            break;
        case "arabic":
            place = '5th most spoken language';
            break;
        default:
            place = "not in the list";
    }
    console.log(place);


})("arabics")