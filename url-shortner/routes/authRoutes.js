const express = require('express');
const passport = require('passport');
const { googleAuth, googleAuthCallback } = require('../controllers/authController');

const router = express.Router();

// Google OAuth routes
router.get('/google', googleAuth);
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), googleAuthCallback);

module.exports = router;
