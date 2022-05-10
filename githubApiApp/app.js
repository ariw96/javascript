const body = document.querySelector('body');
const numOfRepos = document.querySelector(".num-of-repos")
const user = document.querySelector(".login")
const avatar = document.querySelector("img")
const test = document.querySelector(".test")
const val = document.querySelector('input').value;
const input = document.querySelector('input');
const btn = document.querySelector('button');
const message = document.querySelector('.message')
const box = document.querySelector('.box')
box.style.display = "flex"


async function getUserData(username) {
    let url = `https://api.github.com/users/${username}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        if (data.message) {
            message.textContent = data.message + ":try another username"
        } else {
            const avatarUrl = data.avatar_url;
            const login = data.login
            const numOfReposValue = `number of repositories:${data.public_repos}`
            user.textContent = login
            numOfRepos.textContent = numOfReposValue
            avatar.src = avatarUrl
        }
    } catch (error) {
        console.log(error);
    }

}


input.addEventListener("keydown", (event) => {
    if (event.target.keyCode == 13) {
        btn.click();
    }
})
btn.addEventListener("click", (e) => {
    e.preventDefault();
    getUserData(input.value)
    input.value = ""
    const clone = box.cloneNode(true);
    box.appendChild(clone);
});