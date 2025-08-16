const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// @route   POST /api/auth/login
// @desc    Authenticate admin and get token
router.post('/login', authController.login);

module.exports = router;
