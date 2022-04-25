const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div)
const label = document.createElement('h2');
div.appendChild(label)
label.textContent = ' Why are you interested in this position'
const textArea = document.createElement('textarea');
div.appendChild(textArea)
const button = document.createElement('button');
body.appendChild(button)
button.textContent = 'Enter text'
textArea.addEventListener('keydown', function() {
    if (textArea.value.length < 100) { button.textContent = "Enter text" } else { button.textContent = 'submit' }
})