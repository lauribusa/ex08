const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');
const validator = require('validator');
const schema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:'Please enter a name'
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        validate: [validator.isEmail, "Email invalide"],
        required:'Please enter an email'
    }
});
// JAMAIS AVEC 'S'
schema.plugin(passportLocalMongoose, {usernameField: "email"});
module.exports = mongoose.model('User', schema);