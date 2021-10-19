const mongoose = require('mongoose');

const UseraccountSchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        trim: true
    }   
});


module.exports = mongoose.model('Useraccount', UseraccountSchema);