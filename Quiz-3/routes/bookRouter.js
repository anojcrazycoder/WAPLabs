const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Get a single book by ID
router.get('/books/:bookId', bookController.getBookById);

// Add a new book
router.post('/books', bookController.addBook);

// Get books by author's first name
router.get('/books', bookController.getBooksByAuthorFirstname);

module.exports = router;
