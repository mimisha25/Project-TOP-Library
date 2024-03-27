const addBook = document.querySelector(".add-book");
const dialog = document.querySelector(".popup");
const outputBox = document.querySelector("output");
const one= document.querySelector("#title").value;
const two = document.querySelector("#author").value;
const confirmBtn = document.querySelector("#confirmBtn");

addBook.addEventListener("click", () => {
  dialog.showModal();
});

const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author=author;

}
Book.prototype.sayName=function(){
    const {title, author} = this;
    myLibrary.push(this.title, this.author)
}

const player1 = new Book("x", "y");
player1.sayName();
const player2 = new Book("o", "a");
player2.sayName();


// one.addEventListener("change", (e) => {
//   one = one;
// });

// dialog.addEventListener("close", (e) => {
//     document.querySelector(".t").textContent=myLibrary[0]; // Have to check for "default" rather than empty string
//     document.querySelector(".a").textContent=myLibrary[1]; // Have to check for "default" rather than empty string

// });

// confirmBtn.addEventListener("click", (event) => {
//   event.preventDefault(); 
//   dialog.close();
// });
