const mongoose = require('mongoose');

const LOBSchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        trim: true
    }   
});


module.exports = mongoose.model('LOB', LOBSchema);