const express = require('express');
const app = express();
const routes = require(`${process.cwd()}/routes/server`)
const hbs = require('express-hbs');
const bodyParser = require('body-parser');
const helpers = require('./helpers');
const validator = require('express-validator');

app.engine('hbs',hbs.express4({
    partialsDir : [`${__dirname}/views/partials`],
    defaultLayout : `${__dirname}/views/layouts/main.hbs`
}));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

helpers.registerHelpers(hbs);

//setup static folder for static rendering on my server side
app.use(express.static(`${__dirname}/public`))
//setup express to manage the raw requests and turn them into usable properties of req body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//validator
app.use(validator());
app.use('/',routes);

// table > user, password, controller, login form, encryption mdp, (npm: passport)

module.exports = app ;