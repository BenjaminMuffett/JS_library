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
    if (myLibrary.find(o => o.title == createdBook.title) == undefined) {
        myLibrary.push(createdBook);
        console.log('Book added to library.')
    }
    
}

// keep display logic separate from storage array logic 

// function that loops through myLibrary and displays each book on page table/card 
// rather than for each in the array, just append the last entry 
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

// link button to a dialog, get info, create book entry

const newBookButton = document.querySelector('#newBook');
const bookDialog = document.querySelector('#bookDialog');
const confirmButton = bookDialog.querySelector('#confirmBtn');
const bookTitle = bookDialog.querySelector('#book_name');
const bookAuthor = bookDialog.querySelector('#author');
const bookPages = bookDialog.querySelector('#pages');
const bookRead = bookDialog.querySelector('#read');


newBookButton.addEventListener("click", () => {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = ''; 
    bookRead.value = '';
    bookDialog.showModal();
});

confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (bookTitle.value != '') {
        const userBook = addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
        displayBookToLibrary(userBook);
        bookDialog.close();
    }
});