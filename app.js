const express = require('express');
const app = express();
const routes = require(`${process.cwd()}/routes/server`)
const hbs = require('express-hbs');
const bodyParser = require('body-parser');
const helpers = require('./helpers');
const validator = require('express-validator');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionStore = new session.MemoryStore;
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

app.engine('hbs',hbs.express4({
    partialsDir : [`${__dirname}/views/partials`],
    defaultLayout : `${__dirname}/views/layouts/main.hbs`
}));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

helpers.registerHelpers(hbs);

//setup static folder for static rendering on my server side
app.use(express.static(`${__dirname}/public`));
//setup express to manage the raw requests and turn them into usable properties of req body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//validator
app.use(validator());
app.use(cookieParser('secret'));
app.use(session({
    cookie:{maxAge:60000},
    store:sessionStore,
    saveUninitialized:true,
    resave:true,
    secret:'secret'
}));

//init passport

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

app.use('/',routes);
// table > user, password, controller, login form, encryption mdp, (npm: passport)
module.exports = app ;