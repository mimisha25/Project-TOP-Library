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