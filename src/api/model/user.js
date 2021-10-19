const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    Dob: {
        type: String,
        required: true,
        trim: true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },
    zip:{
        type:Number,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        enum:["","female","male","other"],
        default:""
    },
    userTye:{
        type:String,
        required:true,
        trim:true
    }
});


module.exports = mongoose.model('User', UserSchema);

// - first name, Dob, address, phone number, state, zip code, email, gender, userType