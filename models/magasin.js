const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:'Thanks for introducing a name'
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
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [
            {
                type: Number,
                required: "Please enter some coordinates you fuckboy."
            }
        ],
        adress: {
            type: String,
            required: "You must enter an address you twat."
        }
    }
});

module.exports = mongoose.model('magasin', schema);