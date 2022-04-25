const body = document.querySelector('body');
const h1 = document.createElement('h1');
body.appendChild(h1);
h1.textContent = 'Age Calculator';
const input = document.createElement('input');
body.appendChild(input);
const button = document.createElement('button');
body.appendChild(button);
button.textContent = 'Submit';
button.addEventListener('click', function(e) {
    if (input.value === '') {
        alert('Please enter a value');
    }
    if (input.value > 18) {
        alert(`You are ${input.value} years old you could drink some beer.`);
    } else {

        alert(`You are ${input.value} years old you are too young.`);
    }
})