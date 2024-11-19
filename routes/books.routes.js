const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Skema dan model MongoDB
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
});

const Book = mongoose.model('Book', bookSchema);

// Rute untuk mendapatkan semua data buku
router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Ambil semua data dari MongoDB
        res.status(200).json(books); // Kirimkan data ke frontend
    } catch (error) {
        res.status(500).send('Error fetching books: ' + error.message);
    }
});

// Rute untuk menambahkan buku baru
router.post('/add', async (req, res) => {
    try {
        const { title, author, genre } = req.body; // Ambil data dari body permintaan
        const newBook = new Book({ title, author, genre });
        const result = await newBook.save(); // Simpan ke MongoDB
        res.status(201).json(result); // Kirimkan data yang baru ditambahkan
    } catch (error) {
        res.status(500).send('Error adding book: ' + error.message);
    }
});

module.exports = router;
