// From 2.3
// Copy over all of the code from 2.3...

// Exercise 2.4
/*

In our BookList, we have properties to track:
- The last book we've read
- The book we're currently reading
- The next book up

We're not using these properties yet; they're always null.

Our new task is to make them functional. When we add our first book to the
list, `currentlyReading` should get set to it.

We need two new methods:

- startReading
- finishReading

Both of these methods will take a book title, as a string.

When we start reading a book, we should set the `currentlyReading` property
to point to it.

When we finish reading a book, we should set `currentlyReading` back to `null`,
and set `lastRead` to the book we just finished.

Your goal is to add the methods and behaviour necessary so that the following
code runs well and produces the expected output.
*/

const homeLibrary = new BookList();

homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);
homeLibrary.add(new Book("The Eire Affair", "Fantasy", "Jasper Fforde"));
homeLibrary.add(
  new Book("The Revisionists", "Science-fiction", "thomas Mullen")
);
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

  lookupBook(bookTitle) {
    return this.books.find((book) => book.title === bookTitle);
  }
  startReading(bookTitle) {
    this.currentlyReading = this.lookupBook(bookTitle);
  }
  finishReading(bookTitle) {
    this.lastRead = this.lookupBook(bookTitle);
    this.lastRead.isRead = true;
    this.currentlyReading = null;
  }
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

console.log("initial state", homeLibrary.currentlyReading); // should be The Shining book object
console.log("initial last-read", homeLibrary.lastRead); // should be null

homeLibrary.finishReading("Harry Potter");
console.log(
  "Currently reading, after finishing harry potter",
  homeLibrary.currentlyReading
); // should be null
console.log("Last-read, after finishing harry potter", homeLibrary.lastRead); // should be The Shining

homeLibrary.startReading("il gioco della pizza");
console.log("Currentky reading, Bonci", homeLibrary.currentlyReading); // should be The Revisionists book
