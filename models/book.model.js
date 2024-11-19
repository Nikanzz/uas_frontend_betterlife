// models/bookModel.js
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String },
    publishedDate: { type: Date },
    summary: { type: String }
});

module.exports = mongoose.model('Book', BookSchema);