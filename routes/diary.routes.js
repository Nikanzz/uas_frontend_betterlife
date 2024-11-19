// routes/diaryRoutes.js
const express = require('express');
const router = express.Router();
const diaryController = require('../controllers/diary.controller');

// Route to get all diaries
router.get('/diaries', diaryController.getDiaries);

// Route to add a diary
router.post('/diaries', diaryController.addDiary);

module.exports = router;