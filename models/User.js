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
        validate: [validator.isEmail, "EMail invalide"],
        required:'Please enter an email'
    }
});
// JAMAIS AVEC 'S'
module.exports = mongoose.model('User', schema);