const body = document.querySelector('body');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (confirm("Congratulations you successfully sent this form, ")) {
        form.submit();
    }
});