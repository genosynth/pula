const mongoose = require('mongoose')

const signUpUser = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },

    username:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required:true,
        unique: true
    },

    dob:{
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