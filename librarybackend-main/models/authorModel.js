// models/authorModel.js

const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    nationality: {
        type: String,
        required: true
    }, 
    imagelink: {
        type:String,
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
