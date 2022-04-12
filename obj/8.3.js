const book1 = {
    id: "mind",
    author: 'ari',
    year: 2001,


};
const book2 = {
    id: "mindset",
    author: 'ari',
    year: 2000,

};
const bookUtil = {
    getFirstPublished: function(a, b) {
        return a.year < b.year ? book1.id : book2.id;
    },
    getNewEdit: function(book, year) {
        if (!book.yearEdit) {
            return book.yearEdit = year
        }
        return year > book.yearEdit ? book.yearEdit = year : book.yearEdit;
    },
    setLanguage: function(book, language) {
        book.language = language
        return book
    },
    setTranslation: function(book, language, translator) {
        book.translation = [language, translator]
        return book
    },
    setPublisher: function(book, id, location) {
        book.publish = { id, location }
        return book
    },
    isSamePublisher: function(bookA, bookB) {

        return bookA.publish === bookB.publish
    },

};
console.log(bookUtil.getFirstPublished(book1, book2))
console.log(bookUtil.getNewEdit(book1, 2016))
console.log(bookUtil.setLanguage(book1, "english"))
console.log(bookUtil.setTranslation(book1, "hebrew", 'wolf'))
console.log(bookUtil.setPublisher(book1, "ari", 'israel'))