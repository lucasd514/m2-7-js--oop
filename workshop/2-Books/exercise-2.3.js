class Book {
  constructor(title, genre, author, isread) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isread = isread || false;
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }

  newGuy = (book) => {
    this.books.push(book);
    if (this.currentlyReading === null) {
      this.currentlyReading = book;
    }
  };

  getNumRead = () => {
    let booksRead = 0;
    this.books.forEach((book) => {
      if (book.isread === true) {
        booksRead += 1;
      }
    });
    return booksRead;
  };

  getNumUnread = () => {
    let booksUnread = 0;
    this.books.forEach((book) => {
      if (book.isread === false) {
        booksUnread += 1;
      }
    });
    return booksUnread;
  };
}

const homeLibrary = new BookList();
homeLibrary.newGuy(new Book("Harry Potter", "fantasy", "JK Rowling", ""));
homeLibrary.newGuy(
  new Book("il gioco della pizza", "food", "Gabriele Bonci", true)
);
homeLibrary.newGuy(
  new Book("Kansas City 1927", "sports", "Simone Conte", true)
);
homeLibrary.newGuy(new Book("Boomerang", "finance", "Michael Lews", true));
homeLibrary.newGuy(new Book("My Life", "politics", "Bill Clinton", ""));
console.log(homeLibrary.getNumRead());
console.log(homeLibrary.getNumUnread());
