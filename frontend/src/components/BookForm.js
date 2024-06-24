import React, { useState } from "react";

function BookForm({ onSubmit }) {
  const [newBook, setNewBook] = useState({ title: "", author: "", price: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newBook);
    setNewBook({ title: "", author: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author:
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price (₹):
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={newBook.price}
          onChange={handleInputChange}
          step="0.01"
          min="0"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Create Book
      </button>
    </form>
  );
}

export default BookForm;
