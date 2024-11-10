const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    // }
}

const bookOne = new Book('How to cat', 'Sir Angel', 12, 'read');
const bookTwo = new Book('Muscle building for dummies', 'Zyzz', 420, 'read');
const bookThree = new Book('Reasons to skip leg day', 'Redditor', 69, 'not read');

function addBookToLibrary(title, author, pages, read) {
    // takes arguments, creates a book from those arguments, store new book object into an array.
    let createdBook = new Book(title, author, pages, read);
    myLibrary.push(createdBook);
    console.log('Book added to library.')
}

// keep display logic separate from storage array logic 

// function that loops through myLibrary and displays each book on page table/card 
function displayBookToLibrary() {
    const container = document.querySelector('.grid-container');
    myLibrary.forEach((book) => {
        const entry = document.createElement('div');
        entry.classList.add('card');
        for (key in book) {
            const text = document.createElement('p');
            text.textContent = book[key];
            entry.appendChild(text);
        }
        container.appendChild(entry);
    })
}



// for (let book in myLibrary) {
//     const entry = document.createElement('div');
//     entry.classList.add('card');
//     entry.textContent = book[0];
//     console.log(book)
//     container.appendChild(entry);
// }