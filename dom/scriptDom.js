const users = [{
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
}, {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
}, {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
}, ];
const body = document.querySelector("body");
body.style.backgroundColor = "lightblue";
const ul = document.createElement("ul");
body.appendChild(ul);
ul.style.listStyle = "none";
users.forEach(element => {
    const node = document.createElement("li");
    node.classList.add(`${element.id}`);
    var dataID = node.getAttribute('data-id');

    const text = document.createTextNode(`${element.firstName} ${element.lastName}`);
    node.appendChild(text);
    ul.appendChild(node);

});