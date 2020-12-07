class Library {
  constructor(books = []) {
    this.books = books
  };



bookCount = function() {
  return this.books.length;
};

addBook = function (newBook) {
  this.books.push(newBook);
};

addBooks = function (newBooks) {
  newBooks.forEach(book => this.books.push(book));
};

printInventory = function () {
  let author, title;
  this.books.forEach((book) => {
    ({author, title} = {author: book.author, title: book.title})
    console.log(`${book.title} by ${book.author}`);
  });
};

};

export default Library;