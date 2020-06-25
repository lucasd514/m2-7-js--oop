// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isread) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isread = isread || false;
  }
}
const book1 = new Book("Harry Potter", "fantasy", "JK Rowling", "");
const book2 = new Book(
  "il gioco della pizza",
  "food",
  "Gabriele Bonci",
  "true"
);
const book3 = new Book("Kansas City 1927", "sports", "Simone Conte", "true");
const book4 = new Book("Boomerang", "finance", "Michael Lews", "true");
const book5 = new Book("My Life", "politics", "Bill Clinton", true);
console.log(book1, book2, book3, book4, book5);
