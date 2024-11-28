const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now
    },
    pages: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }, 
    imagelink: {
        type:String,
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;