const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] } ));

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/google' }), (req, res) => {
    res.redirect('http://localhost:8080/projects/1')
})

// @desc Logout User
// @route GET /auth/logout
router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/auth/google');
})
module.exports = router;