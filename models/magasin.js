const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:"Thanks for introducing a name"
    },
    slug:{
        type:String,
        trim:true
    },
    desc:{
        type:String
    },
    photo:{
        type:String
    }
})

module.exports = mongoose.model('magasin', schema);