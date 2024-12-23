const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const connectDB = require('./db/connect');
const authRoutes = require('./routes/authRoutes');
const urlRoutes = require('./routes/urlRoutes');

dotenv.config();
const app = express();

// Connect to MongoDB
const db = require('./db/connect')
db.connectDB();

// Middleware
app.use(express.json());
app.use(passport.initialize()); // Passport initialization for Google OAuth

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/shorten', urlRoutes);

// Default Route for undefined routes
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
