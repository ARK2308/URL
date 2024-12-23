const Url = require('../models/URL');

// Generate a short URL
const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  // Generate short URL (simplified example)
  const shortUrl = Math.random().toString(36).substring(2, 8);

  try {
    // Save original and short URL to the database
    const newUrl = new Url({
      originalUrl,
      shortUrl,
    });

    await newUrl.save();

    res.status(201).json({ originalUrl, shortUrl });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Redirect to original URL
const redirectUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });

    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { createShortUrl, redirectUrl };
