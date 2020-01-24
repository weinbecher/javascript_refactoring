// const Library = function (books = []) {
//   this.books = books;
// };

// import {Book} from '.book.js';

class Library {
  constructor(books = []){
  this.books = books;
  }

  bookCount(){
    return this.books.length;
  }

  addBook(newBook){
    this.books.push(newBook);
  }

  addBooks(newBooks){
    newBooks.forEach(book => this.books.push(book));
  }

  printInventory(){
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author}`);
    })
  }

}



// Library.prototype.bookCount = function () {
//   return this.books.length;
// };

// Library.prototype.addBook = function (newBook) {
//   this.books.push(newBook);
// };

// Library.prototype.addBooks = function (newBooks) {
//   newBooks.forEach(book => this.books.push(book));
// };

// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };

// module.exports = Library;

export { Library };
