const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const users = require('../controllers/users')
const passport = require('passport');
const { storeReturnTo } = require('../middleware');
// const LocalStrategy = require('passport-local');

// router.route(path) https://expressjs.com/en/5x/api.html#router
router.route('/register')
    .get(users.renderRegister)
    .post(users.register)

router.route('/login')
    .get(users.renderLogin)
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout', users.logout); 

module.exports = router;
