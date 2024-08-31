const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addBookBtn");
const closeButton = document.querySelector("dialog button");
const booksContainer = document.querySelector("#books-container");

const myLibrary = [];

showButton.addEventListener("click", () => {
    dialog.showModal();
  });
 
  class Book{
    constructor(author,title, pages, read) {
      this.author = author.value;
      this.title = title.value;
      this.pages = pages.value;
      this.read = read.checked;
    }
  
    reset() {
      author.value = "";
      title.value = "";
      pages.value = "";
      read.checked = true;
    }
     toggle(){
      this.read = !this.read;
    }
  }

  function addBookToLibrary() {

    const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
  booksContainer.innerHTML = "";

  myLibrary.forEach((newBook) => {
    const book = document.createElement("div");
    book.classList.add("book");
    booksContainer.appendChild(book);
    const author = document.createElement("p");
    author.textContent ="Author: " + newBook.author;
    book.appendChild(author);

    const title = document.createElement("p");
    title.textContent ="Title: " +  newBook.title;
    book.appendChild(title);

    const pages = document.createElement("p");
    pages.textContent ="Pages: " +  newBook.pages;
    book.appendChild(pages);

    const rea = document.createElement("button"); 
    

    const deleteCard = document.createElement("button"); 
    deleteCard.setAttribute("onclick", "deleteBook(this)");
    deleteCard.classList.add("delete");
    deleteCard.innerText="Delete";
    
    const updateReadButton = () => {
      if (newBook.read === true) {
        rea.classList.add("isRead");
        rea.classList.remove("notRead");
        rea.innerHTML = `Read`;
      } else if(newBook.read === false) {
        rea.classList.add("notRead");
        rea.classList.remove("isRead");
        rea.innerHTML = `Not Read`;
      }
    };
    updateReadButton();
    rea.addEventListener("click", () => {
      newBook.toggle();
      updateReadButton();
    });

    book.appendChild(rea);
    book.appendChild(deleteCard);
    newBook.reset();
});
  }

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    dialog.close();
  });

  const deleteBook = (buttonEl) => {
    const arrBook = myLibrary.findIndex((book) => {
      book.author === buttonEl.parentElement.value;
    });
    buttonEl.parentElement.remove();
    myLibrary.splice(arrBook, 1);
  };