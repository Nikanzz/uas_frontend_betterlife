const express = require('express');
const router = express.Router();
const Calendar = require('../models/calendar.model');

// GET all calendar events
router.get('/', async (req, res) => {
    try {
        const events = await Calendar.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new calendar event
router.post('/', async (req, res) => {
    try {
        const newEvent = new Calendar(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
