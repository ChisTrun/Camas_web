const passport = require('passport');
const FacebookStrategy = require('passport-facebook')
const express = require('express');
const User = require('../models/user.m');
require('dotenv').config()


passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findUserById(id, (err, result) => {
        if (err) done(err);
        done(null, result[0]);
    })
});

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL:  `${process.env.CALLBACK_URL}:${process.env.PORT}/auth/facebook/callback`  || `http://localhost:${process.env.PORT}/auth/facebook/callback`
},
    function (accessToken, refreshToken, profile, cb) {
        User.findUserById(profile.id, (err, row) => {
            if (err) cb(err);
            if (row.length == 0) {
                User.addNewUser(profile, (err, result) => {
                    if (err) cb(err);
                })
            }
            cb(null, profile);
        })
    }
));

const router = express.Router();

router.get('/auth/facebook',
    passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });


module.exports = router;