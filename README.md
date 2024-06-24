# Bookstore Application

This project is a full-stack web application for managing a bookstore's inventory. It consists of a backend API built with Node.js and Express, and a frontend user interface created with React.

## Backend

The backend is a RESTful API that handles CRUD (Create, Read, Update, Delete) operations for books. It uses:

- Node.js and Express for the server
- In-memory data storage (can be easily replaced with a database)
- MVC (Model-View-Controller) architecture for organized code structure

Key features:
- GET /api/books: Retrieve all books
- GET /api/books/:id: Retrieve a specific book
- POST /api/books: Add a new book
- PUT /api/books/:id: Update an existing book
- DELETE /api/books/:id: Remove a book

## Frontend

The frontend is a responsive web application built with React and styled using Bootstrap and custom CSS. It provides a user-friendly interface for interacting with the bookstore inventory.

Key features:
- Display a list of all books in the inventory
- Form to add new books to the inventory
- Responsive design for various screen sizes
- Custom styling for an appealing visual experience

## How to Run

1. Clone the repository
2. Navigate to the backend folder and run `npm install`
3. Start the backend server with `npm start`
4. Navigate to the frontend folder and run `npm install`
5. Start the frontend development server with `npm start`
6. Open your browser and visit `http://localhost:3000`

## Technologies Used

- Backend: Node.js, Express
- Frontend: React, Bootstrap
- API Communication: Axios
- Styling: CSS, Bootstrap

This project demonstrates full-stack development skills, including RESTful API design, frontend state management, and responsive web design.
