const player1 = document.querySelector('#player1-race');
const body = document.querySelector('body');
let active1 = document.querySelector('#player1-race .active');
let active2 = document.querySelector('#player2-race .active');
let counter1 = 0
let counter2 = 0
window.addEventListener("keyup", function(event) {
    if (counter1 === 12) {}
    if (event.key === 'a') {
        active1.classList.remove("active");
        active1 = active1.nextElementSibling;
        active1.classList.add("active");
        counter1 += 1;
    } else {
        active2.classList.remove("active");
        active2 = active2.nextElementSibling;
        active2.classList.add("active");
        counter2 += 1;
    }
    if (counter1 === 11) {
        body.style.backgroundImage = 'url(https://www.pinclipart.com/picdir/big/576-5762132_player-1-wins-clipart.png)'
        alert('Player 1 wins!')

        window.location.reload();
    }



});