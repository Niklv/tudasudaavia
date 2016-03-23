var fs = require('fs');
var path = require('path');

var express = require('express');
var morgan = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var mongoStore = require('connect-mongo')(session);

var config = require('./backend/config/config');
var passport = require('passport');
var ejs = require('ejs');

var app = express();

const backend = path.join(__dirname, 'backend');
const frontend = path.join(__dirname, 'frontend');

// connect to mongo
var db = require('./backend/db/mongo').db;

// FetchF models
var modelsPath = path.join(backend, '/models');
fs.readdirSync(modelsPath).forEach(function (file) {
    require(modelsPath + '/' + file);
});

// configure passport
require('./backend/config/passport');

// App Configuration
app.use(express.static(frontend));
app.use(errorhandler());
app.set('views', frontend + '/views');

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

// express/mongo session storage
app.use(session({
    secret: 'scrtscrt',
    store: new mongoStore({
        url: config.mongo.db,
        collection: 'sessions'
    }),
    resave: true,
    saveUninitialized: true

}));

// passport
app.use(passport.initialize());
app.use(passport.session());

// router
var router = require('./backend/config/routes');
app.use(router);

// Start
var port = config.port;
app.listen(port, function () {
    console.log('Express server listening on port %d in %s mode', port, app.get('env'));
    //require('./data/import_airports').import();
});