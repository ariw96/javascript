console.log()
let body = document.querySelector('body');
let img = document.querySelector('img');
const checkBox = document.querySelector('input')
checkBox.addEventListener('click', (e) => {
    if (e.target.checked) {
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)';
    } else {
        body.style.backgroundImage = '';
    }
})