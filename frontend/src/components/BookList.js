import React, { useState } from "react";
import axios from "axios";
import BookDetails from "./BookDetails";

const API_URL = "http://localhost:3000/api/books";

function BookList({ books, onUpdate }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [editingBook, setEditingBook] = useState(null);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      onUpdate();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleUpdate = async (id, updatedBook) => {
    try {
      await axios.put(`${API_URL}/${id}`, updatedBook);
      setEditingBook(null);
      onUpdate();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>₹{book.price.toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-sm btn-info me-2"
                  onClick={() => setSelectedBook(book)}
                >
                  View
                </button>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(book)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBook && (
        <BookDetails
          bookId={selectedBook.id}
          onClose={() => setSelectedBook(null)}
        />
      )}
      {editingBook && (
        <div className="mt-3">
          <h3>Edit Book</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editingBook.id, editingBook);
            }}
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={editingBook.title}
                onChange={(e) =>
                  setEditingBook({ ...editingBook, title: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={editingBook.author}
                onChange={(e) =>
                  setEditingBook({ ...editingBook, author: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                value={editingBook.price}
                onChange={(e) =>
                  setEditingBook({
                    ...editingBook,
                    price: parseFloat(e.target.value),
                  })
                }
                step="0.01"
                min="0"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => setEditingBook(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default BookList;
