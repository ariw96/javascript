const body = document.querySelector('body');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
const div = document.querySelector('div');
const message = document.querySelector('h3');
const message2 = document.querySelector('h2');
const keys = document.querySelector('.keys');
input.style.display = 'none';
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
div.style = " width: 50px;";
div.style.border = "1px solid black";
div.textContent = "?"
div.style.textAlign = "center";
div.style.fontSize = "50px";
message.textContent = "try to guess the letter";
keys.textContent = ""
const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
window.addEventListener("keypress", function(e) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    if (!abc.includes(e.key)) { alert('please enter a letter') }
    if (keys.textContent.includes(e.key)) {
        message2.textContent = "you already guessed that letter";
        message2.style.color = "red";
    } else {
        keys.textContent += e.key + ",";
        message2.textContent = "wrong guess";
    }
    if (keys.textContent.includes(randomLetter)) {
        div.textContent = randomLetter;
        div.style.color = "green";
        message.textContent = "you win";
        message.style.color = "green";
    } else {
        message.textContent = "wrong guess";
        message.style.color = "red";
    }


})