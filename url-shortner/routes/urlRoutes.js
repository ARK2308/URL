const express = require('express');
const { createShortUrl, redirectUrl } = require('../controllers/urlController');
const verifyToken = require('../middleware/verifyToken');
const rateLimiter = require('../middleware/rateLimiter');

const router = express.Router();

// Protect URL shortening route with token verification
router.post('/shorten', verifyToken, rateLimiter, createShortUrl);

// Redirect route (no authentication needed)
router.get('/:shortUrl', redirectUrl);

module.exports = router;
