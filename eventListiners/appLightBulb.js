const body = document.querySelector('body');
const image = document.createElement('img');
body.appendChild(image);
image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/m1-4.png'
let lightBulb = "off";

image.addEventListener('click', function() {
    if (lightBulb === 'off') {
        lightBulb = 'on';
        image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/m2-1.png'
    } else {
        image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/m1-4.png';
        lightBulb = 'off';
    }
})