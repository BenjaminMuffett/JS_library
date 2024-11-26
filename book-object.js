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

class ClassBook {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


const bookOne = new Book('How to cat', 'Sir Angel', 12, 'read');
const bookTwo = new Book('Muscle building for dummies', 'Zyzz', 420, 'read');
const bookThree = new Book('Reasons to skip leg day', 'Redditor', 69, 'not read');

function addBookToLibrary(title, author, pages, read) {
    // takes arguments, creates a book from those arguments, store new book object into an array.
    // let createdBook = new Book(title, author, pages, read);
    let createdBook = new ClassBook(title, author, pages, read)
    myLibrary.push(createdBook);
    console.log('Book added into library.');
}

// keep display logic separate from storage array logic 

// function that loops through myLibrary and displays each book on page table/card 
// rather than for each in the array, just append the last entry 

// could be made better by separating into smaller functions, i.e array info to display, then del button, toggle
function displayBookToLibrary() {
    const container = document.querySelector('.grid-container');
    // const newDisplayBook = myLibrary[myLibrary.length -1];
    let libraryIndex = myLibrary.length - 1;
    const entry = document.createElement('div');
    entry.classList.add('card');
    entry.setAttribute('id', libraryIndex);
    for (key in myLibrary[libraryIndex]) {
        const text = document.createElement('p');
        text.textContent = myLibrary[libraryIndex][key];
        text.setAttribute('class', key);
        entry.appendChild(text);
    }
    const delButton = document.createElement('button');
    delButton.setAttribute('id', libraryIndex);
    delButton.classList.add('delBtn');
    delButton.textContent = "Delete Entry";
    entry.appendChild(delButton);
    delButton.addEventListener('click', e => {
    console.log('Firing the laser');
    const element = e.target;
    element.parentElement.remove();
    delete myLibrary[delButton.getAttribute('id')];
    });
    toggleAppend = toggleRead();
    entry.appendChild(toggleAppend);
    container.appendChild(entry);
    
}

// link button to a dialog, get info, create book entry

const newBookButton = document.querySelector('#newBook');
const bookDialog = document.querySelector('#bookDialog');
const confirmButton = bookDialog.querySelector('#confirmBtn');
const closeButton =bookDialog.querySelector('#cancel');
const bookTitle = bookDialog.querySelector('#book_name');
const bookAuthor = bookDialog.querySelector('#author');
const bookPages = bookDialog.querySelector('#pages');
const bookRead = bookDialog.querySelector("input[name= readStatus]:checked").value;


newBookButton.addEventListener("click", () => {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = ''; 
    bookRead.value = '';
    bookDialog.showModal();
});

bookDialog.addEventListener("submit", event => {
    event.preventDefault();
    const bookRead = bookDialog.querySelector("input[name= readStatus]:checked").value;
    const userBook = addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead);
    displayBookToLibrary(userBook);
    bookDialog.close();
    console.log('Book added to your library.')
});

closeButton.addEventListener('click', () => {
    bookDialog.close();
})

// tomorrows starting point, how to add more to a dom element 

function toggleRead() {
    const toggleBtn = document.createElement('button');
    toggleBtn.classList.add('toggle');
    toggleBtn.textContent = "Reading Status";
    toggleBtn.addEventListener('click', event => {
        const element = event.target;
        // console.log(element.parentElement);
        const testVal = element.parentElement.querySelector('.read').textContent;
        // console.log(testVal);
        if (testVal == 'Read') {
            element.parentElement.querySelector('.read').textContent = 'Not Read';
            myLibrary[element.parentElement.getAttribute('id')].read = 'Not Read';
            console.log(myLibrary[element.parentElement.getAttribute('id')].read);
        }
        if (testVal == 'Not Read') {
            element.parentElement.querySelector('.read').textContent = 'Read';
            myLibrary[element.parentElement.getAttribute('id')].read = 'Read';
            console.log(myLibrary[element.parentElement.getAttribute('id')].read);
        }
    })
    return toggleBtn
}