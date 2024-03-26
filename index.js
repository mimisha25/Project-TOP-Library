const addBook = document.querySelector(".add-book");
const dialog = document.querySelector(".popup");
const outputBox = document.querySelector("output");
const input = document.querySelector("#title");
const confirmBtn = document.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
addBook.addEventListener("click", () => {
  dialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
input.addEventListener("change", (e) => {
  confirmBtn.value = input.value;
});

//  "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
dialog.addEventListener("close", (e) => {
    outputBox.value=confirmBtn.value; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  dialog.close();
});

// const myLibrary = [];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }