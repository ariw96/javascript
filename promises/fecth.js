const btn = document.querySelector("button")
const p = document.querySelector("p")
const h1 = document.querySelector("h1")
btn.style.color = "green"
btn.style.fontSize = "50px";
btn.addEventListener("click", func)

function func() {
    fetch("https://api.jokes.one/jod")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            p.textContent = data.contents.jokes[0].joke.text;
            h1.textContent = data.contents.jokes[0].joke.title;
        })
        .catch(err => console.error(err))

}