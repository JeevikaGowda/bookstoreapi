import React, { useState, useEffect } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import Alert from "./components/Alert";
import "./App.css";

const API_URL = "http://localhost:3000/api/books";

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
      setFilteredBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleCreateBook = async (newBook) => {
    try {
      await axios.post(API_URL, newBook);
      fetchBooks();
      setAlert({ type: "success", message: "Book added successfully!" });
      setTimeout(() => setAlert(null), 3000);
    } catch (error) {
      console.error("Error creating book:", error);
      setAlert({
        type: "danger",
        message: "Error adding book. Please try again.",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const handleUpdateBooks = () => {
    fetchBooks();
  };

  const handleSearch = (searchTerm) => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">📚 Bookstore</h1>
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="row">
        <div className="col-md-4">
          <div className="book-form">
            <h2>Add New Book</h2>
            <BookForm onSubmit={handleCreateBook} />
          </div>
        </div>
        <div className="col-md-8">
          <h2>Book List</h2>
          <SearchBar onSearch={handleSearch} />
          <BookList books={filteredBooks} onUpdate={handleUpdateBooks} />
        </div>
      </div>
    </div>
  );
}

export default App;
