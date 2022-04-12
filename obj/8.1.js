const book = {
    id: "mind",
    author: 'ari',
    year: '2010',
};

const func = (book) => {
    return `The book ${book.id} was written by ${book.author} in
      the year ${book.year}`
}
console.log(func(book));