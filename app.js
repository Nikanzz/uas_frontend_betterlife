const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Books Routes
const booksRoutes = require('./routes/books.routes'); // Ensure the file name matches exactly
app.use('/api/books', booksRoutes);

// MongoDB Connection
mongoose
    .connect('mongodb://127.0.0.1:27017/booksDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Could not connect to MongoDB:', error));

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
