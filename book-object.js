const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    }
}

const bookOne = new Book('How to cat', 'Sir Angel', 12, 'read');
const bookTwo = new Book('Muscle building for dummies', 'Zyzz', 420, 'read');
const bookThree = new Book('Reasons to skip leg day', 'Redditor', 69, 'not read');

function addBookToLibrary(title, author, pages, read) {
    // takes arguments, creates a book from those arguments, store new book object into an array.
    let createdBook = new Book(title, author, pages, read);
    myLibrary.push(createdBook);
}