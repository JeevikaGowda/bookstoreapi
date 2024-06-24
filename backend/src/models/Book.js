// In-memory data storage for books

let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 14.99,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99 },
  { id: 3, title: "1984", author: "George Orwell", price: 10.99 },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", price: 8.99 },
];

// Get all books
exports.getAllBooks = () => books;

// Get a book by ID
exports.getBookById = (id) => books.find((book) => book.id === parseInt(id));

// Create a new book
exports.createBook = (newBook) => {
  const id = books.length + 1;
  const book = { id, ...newBook };
  books.push(book);
  return book;
};

// Update a book
exports.updateBook = (id, updatedBook) => {
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));
  if (bookIndex === -1) return null;
  books[bookIndex] = { ...books[bookIndex], ...updatedBook };
  return books[bookIndex];
};

// Delete a book
exports.deleteBook = (id) => {
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));
  if (bookIndex === -1) return null;
  const deletedBook = books.splice(bookIndex, 1)[0];
  return deletedBook;
};
