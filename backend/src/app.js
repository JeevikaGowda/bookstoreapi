const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/api/books", bookRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Bookstore API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
