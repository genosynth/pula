const mongoose = require('mongoose')

const signUpUser = new mongoose.Schema({
 
    username:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type:String,
        required: true
    },

    cards:{
        type: Array,
        default: []
    
    },

    date:{
        type:Date,
        default:Date.now()
        
    }
 
})

module.exports = mongoose.model('users', signUpUser)