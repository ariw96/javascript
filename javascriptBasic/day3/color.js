(function(color) {
    let kindColor;
    switch (color) {
        case 'yellow':
        case 'pink':
        case 'orange':
            kindColor = 'light color';
            break;
        case 'blue':
        case 'purpule':
        case 'brown':
            kindColor = 'dark color';
            break;

        default:
            kindColor = "unknown";
    }
    console.log(kindColor);


})('brownm')