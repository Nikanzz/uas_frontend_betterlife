// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

// Route to get all books
router.get('/books', bookController.getBooks);

// Route to add a book
router.post('/books', bookController.addBook);

module.exports = router;
