import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/books";

function BookDetails({ bookId, onClose }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${API_URL}/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Price:</strong> ${book.price.toFixed(2)}
      </p>
      <button className="btn btn-secondary" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default BookDetails;
