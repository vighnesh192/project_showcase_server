const express = require('express');
const passport = require('passport');
const router = express.Router();

const clientUrl = process.env.NODE_ENV ? 'https://projstemp.herokuapp.com/' : 'http://localhost:3000/';

// @desc    Auth with Google
// @route   GET /auth/google
// @desc Middleware:-  Triggers GoogleStrategy and gets us the CODE in the url after auth
router.get('/google', passport.authenticate('google', { scope: ['profile'] } ));

// @desc Google auth callback
// @route GET /auth/google/callback
// @desc Middleware:-   Exchanges the above CODE for profile info, Fires the callback func in passport.js, serializes the user and saves it inside a cookie
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/google' }), (req, res) => {
    res.redirect(clientUrl);
})

router.get('/checkLogin', (req, res) => {
    if(req.user) {
        res.json(req.user);
    }
    else {
        res.status(404).json({msg: "User not found."})
    }
})

// @desc Logout User
// @route GET /auth/logout
router.get('/logout', (req, res) => {
    try {
        req.logOut();
        res.json({msg: "User logged out successfully", status: "Succes"});
    } 
    catch (error) {
        res.status(500).json({msg: "User logout unsuccessful", status: "Failed"})
    }
})
module.exports = router;