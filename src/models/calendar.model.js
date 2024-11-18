const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: false },
});

module.exports = mongoose.model('Calendar', calendarSchema);
