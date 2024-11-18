const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect('mongodb://127.0.0.1:27017/betterlife_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.error('Connection error:', err));

// Routes
app.get('/', (req, res) => res.send('Server is running'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// calendar
const calendarRoutes = require('./routes/calendar.routes');
app.use('/api/calendar', calendarRoutes);
