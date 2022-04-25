const body = document.querySelector('body');
const h3 = document.createElement('h3');
body.appendChild(h3);
const input = document.createElement('input');
body.appendChild(input);
const button = document.createElement('button');
body.appendChild(button)
h3.textContent = "how many smile's do you want"
button.textContent = 'submit';
const ul = document.createElement('ul')
body.appendChild(ul)
ul.style.display = 'flex';
button.addEventListener('click', function() {
    let number = input.value
    for (let i = 0; i < number; i++) {
        const node = document.createElement("li");
        const img = document.createElement("img");
        img.src = "https://freesvg.org/img/Button---Happy.png";
        node.appendChild(img);
        ul.appendChild(node);
    }
})