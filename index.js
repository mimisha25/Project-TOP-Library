const book_container = document.querySelector(".library-container");
const dialog = document.querySelector(".popup");
const addBook = document.querySelector("h2");
const btn = document.querySelector(".button");
const show_btn = document.querySelector(".show");
const isRead_state = document.querySelector(".book-isRead");
const myLibrary = [];

addBook.addEventListener("click", () => {
    dialog.showModal();
  });
  
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

btn.addEventListener("click", () => {
    event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").checked
    ? "has been read"
    : "not read yet";


  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
  
  const new_Book = document.createElement("div");
  new_Book.classList.add("book");
  const new_title = document.createElement("div");
  new_title.classList.add("book-title");
  const new_author = document.createElement("div");
  new_author.classList.add("book-author");
  const new_pages = document.createElement("div");
  new_pages.classList.add("book-pages");
  const new_isRead = document.createElement("div");
  new_isRead.classList.add("book-isRead");
  const button = document.createElement("button");
  button.classList.add("delete");

  new_title.textContent = `Title : ${book.title}`;
  new_author.textContent = `Author :${book.author}`;
  new_pages.textContent = `Number of pages :${book.pages}`;
  new_isRead.textContent = `${book.isRead}`;
    button.textContent='Delete'


  book_container.appendChild(new_Book);
  new_Book.appendChild(new_title);
  new_Book.appendChild(new_author);
  new_Book.appendChild(new_pages);
  new_Book.appendChild(new_isRead);
  new_Book.appendChild(button);


document.querySelector(".delete").addEventListener("click", function(){
    book_container.removeChild(new_Book);
})
dialog.close();
reset();
 
});

function reset(){
     document.querySelector("#title").value = '';
        document.querySelector("#author").value='';
        document.querySelector("#pages").value = '';
         document.querySelector("#isRead").checked=false;
}


