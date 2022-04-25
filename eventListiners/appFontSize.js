const body = document.querySelector('body');
const text = document.createElement('div');
text.textContent = 'random text';
let textSize = 50
text.style.fontSize = `${textSize}px`;
body.style.textAlign = 'center';
const buttonPlus = document.createElement('button')
const buttonMinus = document.createElement('button')
body.appendChild(buttonMinus)
body.appendChild(text);
body.appendChild(buttonPlus)
buttonPlus.textContent = '+'
buttonMinus.textContent = '-'
buttonMinus.addEventListener('click', function() {
    if (textSize > 10) {
        textSize -= 10;
        text.style.fontSize = `${textSize}px`;
    }
})
buttonPlus.addEventListener('click', function() {
    if (textSize < 100) {
        textSize += 10;
        text.style.fontSize = `${textSize}px`;
    }
})
button.addEventListener('click', function() {
    let number = input.value
    alert(number)
})