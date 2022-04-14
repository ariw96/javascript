let library = [{
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
]

function canBeRead(library) {
    let truelibrary = []
    library.forEach((element) => {
        if (element.readingStatus === true) {
            truelibrary.push(element)
        }

    })
    return truelibrary
}
console.log(canBeRead(library))