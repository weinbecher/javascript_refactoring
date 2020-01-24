// const Book = function (author, title, genre) {
//   this.author = author;
//   this.title = title;
//   this.genre = genre;
// };
//
// module.exports = Book;


// Replace the constructor functions and prototypal methods in the `Book` and `Library` modules with the `class` syntax. Note: JavaScript still uses prototypal inheritance under the hood, JavaScript classes are just syntactic sugar.


class Book {
  constructor(author, title, genre) {
    this.author = author;
    this.title = title;
    this.genre = genre;
  }
}

export { Book };
