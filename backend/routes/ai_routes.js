const express = require('express');
const router = express.Router();
const { handleChat } = require('../controllers/ai_controller');

router.post('/chat', handleChat);

module.exports = router;
