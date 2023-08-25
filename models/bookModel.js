const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id :{type: Number, required: true, unique: true},
    title: {type: String, required: true},
    authorName: {type: String, required: true},
    genre: {type: String, required: true},
    year: {type: Number, required: true},
    rating: {type: Number, required: true},    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);