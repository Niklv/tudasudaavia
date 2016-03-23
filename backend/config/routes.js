var path = require('path');
var auth = require('../config/auth');
var express = require('express');
var router = express.Router();


// User Routes
var users = require('../controllers/users');
router.post('/auth/users', users.create);
router.get('/auth/users/:userId', users.show);

// Check if username is available
router.get('/auth/check_username/:username', users.exists);

// Session Routes
var session = require('../controllers/session');
router.get('/auth/session', auth.ensureAuthenticated, session.session);
router.post('/auth/session', session.login);
router.delete('/auth/session', session.logout);

var airports = require('../controllers/airports');
router.get('/api/airports', auth.ensureAuthenticated, airports.all);
router.get('/api/airports/find', auth.ensureAuthenticated, airports.find);
router.get('/api/airports/search/:airportId/:queryDate', auth.ensureAuthenticated, airports.checkCache, airports.load);

router.param('airportId', airports.airport);
router.param('queryDate', airports.queryDate);

// Angular Routes
router.get('/partials/*', function (req, res) {
    var requestedView = path.join('./', req.url);
    res.render(requestedView);
});

router.get('/*', function (req, res) {
    if (req.user) {
        res.cookie('user', JSON.stringify(req.user.user_info));
    }

    res.render('index.html');
});

module.exports = router;