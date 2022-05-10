const btn = document.querySelector("button")
const p = document.querySelector("p")
const h1 = document.querySelector("h1")
btn.style.color = "green"
btn.style.fontSize = "50px";
btn.addEventListener("click", getJoke)

async function getJoke() {
    const res = await fetch("https://api.jokes.one/jod")
    const data = await res.json();
    p.textContent = data.contents.jokes[0].joke.text;
    h1.textContent = data.contents.jokes[0].joke.title;
}