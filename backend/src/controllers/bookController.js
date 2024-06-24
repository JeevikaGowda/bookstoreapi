const Book = require("../models/Book");

// Get all books
exports.getAllBooks = (req, res) => {
  res.json(Book.getAllBooks());
};

// Get a book by ID
exports.getBookById = (req, res) => {
  const book = Book.getBookById(req.params.id);
  if (!book) res.status(404).send("Book not found");
  else res.json(book);
};

// Create a new book
exports.createBook = (req, res) => {
  const newBook = Book.createBook(req.body);
  res.json(newBook);
};

// Update a book
exports.updateBook = (req, res) => {
  const updatedBook = Book.updateBook(req.params.id, req.body);
  if (!updatedBook) res.status(404).send("Book not found");
  else res.json(updatedBook);
};

// Delete a book
exports.deleteBook = (req, res) => {
  const deletedBook = Book.deleteBook(req.params.id);
  if (!deletedBook) res.status(404).send("Book not found");
  else res.json(deletedBook);
};
