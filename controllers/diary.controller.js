// controllers/diaryController.js
const Diary = require('../models/diary.model');

// Get all diary entries
exports.getDiaries = async (req, res) => {
    try {
        const diaries = await Diary.find();
        res.status(200).json(diaries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new diary entry
exports.addDiary = async (req, res) => {
    try {
        const diary = new Diary(req.body);
        await diary.save();
        res.status(201).json(diary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};