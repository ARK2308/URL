const passport = require('passport');

// Google Authentication
const googleAuth = (req, res , next) => {
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
};

// Google Callback
const googleAuthCallback = (req, res ) => {
  res.status(200).json({
    message: 'Google authentication successful',
    user: req.user,
  });
};

module.exports = { googleAuth, googleAuthCallback };
